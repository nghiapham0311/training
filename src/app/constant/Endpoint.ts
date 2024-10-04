import { environment } from '../../environments/environment';

const GATEWAY_ENDPOINT = environment.gatewayService;
const FUNC_ENDPOINT = environment.funcService;

export const ACCOUNTS_ENDPOINT = {
  MEMBER_ME: `${GATEWAY_ENDPOINT}/accounts/member/me`,
  UPDATE: `${GATEWAY_ENDPOINT}/accounts/member/`,
};

export const PROFILES_ENDPOINT = {
  CURRENT_USER: `${GATEWAY_ENDPOINT}/profiles/me`,
  PROFILES: `${GATEWAY_ENDPOINT}/profiles/`,
};

export const FUNC_API = {
  AVATAR: `${FUNC_ENDPOINT}/api/me/avatars`,
};
