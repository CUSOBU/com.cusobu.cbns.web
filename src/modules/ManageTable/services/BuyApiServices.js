import EntityApiService from "../../../services/EntityApiServices";
class BuyApiService extends EntityApiService {
  inviteUser = (params) => {
    return ApiClientService.post(this.getPath(""), params);
  };

  resendInvite = (params) => {
    return ApiClientService.post(this.getPath("/resend"), params);
  };
}

export default new InviteApiService(`${authentication.path}/api/invites`);
