package com.example.demo.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpHeaders;


import java.util.Collections;
import java.util.Map;


//@Service
//public class LoginService extends DefaultOAuth2UserService {
//
//    private static final String ALLOWED_DOMAIN = "@dgu.ac.kr";
//
//    @Override
//    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
//        OAuth2User oAuth2User = super.loadUser(userRequest);
//
//        // 사용자 정보를 추가로 처리
//        Map<String, Object> attributes = oAuth2User.getAttributes();
//        String email = (String) attributes.get("email");
//
//        // 이메일 도메인 검증
//        if (!email.endsWith(ALLOWED_DOMAIN)) {
//            throw new OAuth2AuthenticationException("허용되지 않는 이메일 도메인입니다.");
//        }
//
//        // 사용자 정보를 포함한 커스터마이징된 OAuth2User 객체 생성
//        return new DefaultOAuth2User(
//                Collections.singleton(new SimpleGrantedAuthority("ROLE_USER")),
//                attributes,
//                "email"
//        );
//    }
//}

@Service
public class LoginService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

    private static final Logger logger = LoggerFactory.getLogger(LoginService.class);
    private static final String ALLOWED_DOMAIN = "@dgu.ac.kr";
    private static final String USER_INFO_URI = "https://www.googleapis.com/oauth2/v2/userinfo";

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        logger.info("loadUser called with userRequest: {}", userRequest);

        String userInfoEndpointUri = userRequest.getClientRegistration().getProviderDetails().getUserInfoEndpoint().getUri();
        if (userInfoEndpointUri == null) {
            userInfoEndpointUri = USER_INFO_URI;  // 구글 사용자 정보 엔드포인트 URI
        }

        // 액세스 토큰 추출
        String accessToken = userRequest.getAccessToken().getTokenValue();

        // 사용자 정보 요청
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);

        HttpEntity<String> entity = new HttpEntity<>("", headers);
        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<Map> response = restTemplate.exchange(userInfoEndpointUri, HttpMethod.GET, entity, Map.class);
        Map<String, Object> attributes = response.getBody();

        logger.info("User attributes: {}", attributes);

        // 이메일 확인
        String email = (String) attributes.get("email");
        if (email == null) {
            logger.error("Email attribute is missing in user info");
            throw new OAuth2AuthenticationException("Email attribute is missing");
        }

        logger.info("User email: {}", email);

        // 이메일 도메인 검증
        if (!email.endsWith(ALLOWED_DOMAIN)) {
            logger.error("Invalid email domain: {}", email);
            throw new OAuth2AuthenticationException("허용되지 않는 이메일 도메인입니다.");
        }

        // 사용자 ID 속성 확인
        String userNameAttributeName = "id";  // 구글의 사용자 ID 속성

        DefaultOAuth2User customOAuth2User = new DefaultOAuth2User(
                Collections.singleton(new SimpleGrantedAuthority("ROLE_USER")),
                attributes,
                userNameAttributeName
        );
        logger.info("Custom OAuth2User created: {}", customOAuth2User);

        return customOAuth2User;
    }
}