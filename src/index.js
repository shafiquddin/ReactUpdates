import { StrictMode } from "react";
import {createRoot} from 'react-dom/client'

import App from './App.jsx'

const createElement = document.getElementById('root');
const root = createRoot(createElement);

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)