import express from "express";
import { AuthRoutes } from "../Modules/Auth/auth.route";
import { BannerRoutes } from "../Modules/banner/banner.routes";
import { BundleRoutes } from "../Modules/Bundle/Bundle.routes";
import { CampaignRoutes } from "../Modules/Campaign/campaign.route";
import { ChatRoutes } from "../Modules/Chat/chat.route";
import { getInTouchRoutes } from "../Modules/GetInTouch/getInTouch.route";
import { PaymentRoutes } from "../Modules/Payment/Payment.routes";
import { ScreenRoutes } from "../Modules/Screen/Screen.routes";
import { UserDataRoutes } from "../Modules/User/user.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/user",
    route: UserDataRoutes,
  },
  {
    path: "/banner",
    route: BannerRoutes,
  },
  {
    path: "/screen",
    route: ScreenRoutes,
  },
  {
    path: "/bundle",
    route: BundleRoutes,
  },
  {
    path: "/payment",
    route: PaymentRoutes,
  },
  {
    path: "/campaign",
    route: CampaignRoutes,
  },
  {
    path: "/get-in-touch",
    route: getInTouchRoutes,
  },

  {
    path: "/chat",
    route: ChatRoutes,
  },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
