//Import Layout
import { HeaderOnly } from '~/components/Layouts';

// Import Page
import Home  from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import HomeAdmin from '~/pages/HomeAdmin';
import AdminLayout from '~/components/Layouts/AdminLayout';

// public routes
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload, layout: HeaderOnly},
    {path: '/search', component: Search, layout: null},
];

const privateRoutes = [
    {path: '/admin', component: HomeAdmin, layout: AdminLayout},
];

export { publicRoutes, privateRoutes };
