// Dependencies
import { Route, Routes } from 'react-router-dom';

// Layouts
import { DefaultLayout } from './Components/Layout/Default';

// Pages
import { CreateItems } from './Pages/CreateItems';
import { CreateBundle } from './Pages/CreateBundle';
import { ReleasedBundles } from './Pages/ReleasedBundles';

export const App = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout/>}>
        <Route index element={<CreateItems/>}/>
        <Route path="bundles" element={<CreateBundle/>}/>
        <Route path="bundles/released" element={<ReleasedBundles/>}/>
        <Route path="*" element={<CreateItems/>}/>
      </Route>
    </Routes>
  );
}