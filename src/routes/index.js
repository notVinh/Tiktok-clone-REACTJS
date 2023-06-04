import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { OnlyHeaderLayout } from '~/layouts';
import config from '~/config';
import Live from '~/pages/Live';

const publisRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, Layout: null },
    { path: config.routes.search, component: Search, Layout: OnlyHeaderLayout },
    { path: config.routes.live, component: Live },
];

const privateRoutes = [];

export { publisRoutes, privateRoutes };
