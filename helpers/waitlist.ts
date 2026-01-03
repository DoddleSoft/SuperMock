import { createClient } from "@/libs/supabase/client";

export interface WaitlistData {
  name: string;
  phone: string;
  email?: string;
  centreName?: string;
  location?: string;
}

export interface WaitlistResponse {
  success: boolean;
  message: string;
  error?: string;
}

// Validation helpers
const sanitizeString = (input: string): string => {
  return input.trim().replace(/[<>"'`]/g, "");
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhone = (phone: string): boolean => {
  // Remove all spaces and dashes
  const cleanPhone = phone.replace(/[\s\-]/g, "");

  // Check format 1: +8801775491560 (13 digits with +880 prefix)
  if (cleanPhone.startsWith("+880")) {
    const digitsOnly = cleanPhone.slice(4); // Remove +880
    return /^1[3-9]\d{8}$/.test(digitsOnly);
  }

  // Check format 2: 01775491560 (11 digits starting with 0)
  if (cleanPhone.startsWith("0")) {
    return /^01[3-9]\d{8}$/.test(cleanPhone);
  }

  return false;
};

const formatPhoneNumber = (phone: string): string => {
  // Remove all spaces and dashes
  const cleanPhone = phone.replace(/[\s\-]/g, "");

  // If already has +880 prefix, return as-is
  if (cleanPhone.startsWith("+880")) {
    return cleanPhone;
  }

  // If starts with 0, strip it and add +88
  if (cleanPhone.startsWith("0")) {
    return "+88" + cleanPhone;
  }

  // Return as-is (validation will catch invalid formats)
  return cleanPhone;
};

const validateWaitlistData = (
  data: WaitlistData
): { valid: boolean; error?: string } => {
  // Validate required fields
  if (!data.name || data.name.trim().length === 0) {
    return { valid: false, error: "Name is required" };
  }

  if (data.name.length > 100) {
    return { valid: false, error: "Name is too long (max 100 characters)" };
  }

  // Validate required phone
  if (!data.phone || data.phone.trim().length === 0) {
    return { valid: false, error: "Phone number is required" };
  }

  if (!isValidPhone(data.phone)) {
    return {
      valid: false,
      error:
        "Invalid phone number. Enter either 01775491560 or +8801775491560 format.",
    };
  }

  // Validate optional email
  if (data.email && data.email.trim().length > 0) {
    if (!isValidEmail(data.email)) {
      return { valid: false, error: "Invalid email format" };
    }

    if (data.email.length > 100) {
      return { valid: false, error: "Email is too long (max 100 characters)" };
    }
  }

  // Validate optional centre name
  if (data.centreName && data.centreName.length > 200) {
    return {
      valid: false,
      error: "Centre name is too long (max 200 characters)",
    };
  }

  return { valid: true };
};

export const addToWaitlist = async (
  data: WaitlistData
): Promise<WaitlistResponse> => {
  try {
    // Validate data
    const validation = validateWaitlistData(data);
    if (!validation.valid) {
      return {
        success: false,
        message: validation.error || "Invalid data",
        error: validation.error,
      };
    }

    // Sanitize all string inputs
    const sanitizedData = {
      name: sanitizeString(data.name),
      phone: formatPhoneNumber(data.phone), // Phone is now required
      email: data.email ? sanitizeString(data.email.toLowerCase()) : null,
      centre_name: data.centreName ? sanitizeString(data.centreName) : null,
      location: data.location || null,
    };

    // Create Supabase client
    const supabase = createClient();

    // Check if email already exists (only if email is provided)
    if (sanitizedData.email) {
      const { data: emailExists } = await supabase
        .from("waitlist")
        .select("id")
        .eq("email", sanitizedData.email)
        .limit(1);

      if (emailExists && emailExists.length > 0) {
        return {
          success: false,
          message:
            "This email is already registered. Please use a different email.",
          error: "Email already exists",
        };
      }
    }

    // Check if phone number already exists
    const { data: phoneExists } = await supabase
      .from("waitlist")
      .select("id")
      .eq("phone", sanitizedData.phone)
      .limit(1);

    if (phoneExists && phoneExists.length > 0) {
      return {
        success: false,
        message:
          "This phone number is already registered. Please use a different phone number.",
        error: "Phone already exists",
      };
    }

    // Insert into database
    // Supabase uses parameterized queries automatically, protecting against SQL injection
    const { error } = await supabase.from("waitlist").insert([sanitizedData]);

    if (error) {
      // Check for permission denied
      if (error.code === "42501") {
        return {
          success: false,
          message:
            "Permission denied. Please check your Supabase configuration.",
          error: "Permission denied",
        };
      }

      // Handle unique constraint violations
      if (
        error.code === "23505" ||
        error.message?.includes("unique constraint")
      ) {
        // Check which column caused the violation
        if (error.message?.includes("email")) {
          return {
            success: false,
            message:
              "This email is already registered. Please use a different email.",
            error: "Email already exists",
          };
        }
        if (error.message?.includes("phone")) {
          return {
            success: false,
            message:
              "This phone number is already registered. Please use a different phone number.",
            error: "Phone already exists",
          };
        }
        // Generic duplicate error
        return {
          success: false,
          message:
            "This information is already registered. Please use different details.",
          error: "Duplicate entry",
        };
      }

      console.error("Supabase error:", error);
      return {
        success: false,
        message: "An error occurred while registering. Please try again.",
        error: "Registration failed",
      };
    }

    return {
      success: true,
      message: "Successfully added to waitlist!",
    };
  } catch (error) {
    console.error("Unexpected error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
