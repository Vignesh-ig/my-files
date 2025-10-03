package com.api.auth.information.dto.request;

import jakarta.validation.constraints.NotBlank;

public record PasswordRequest(
        @NotBlank String password
) {}
