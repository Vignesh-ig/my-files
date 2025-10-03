package com.api.auth.information.service;

import com.api.auth.information.dto.request.PasswordRequest;

public interface PasswordService {

    String hashPassword(PasswordRequest request);



}
