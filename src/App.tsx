import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon, IonContent, IonPage, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import About from './pages/About';
import { document, informationCircle } from 'ionicons/icons';


import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';

function isAppleDevice() {
  return /Macintosh|iPad|iPhone|iPod/.test(navigator.userAgent);
}

setupIonicReact({
  mode: isAppleDevice() ? 'ios' : 'md'
});

const App: React.FC = () => {


  return (
    <IonApp>
      <IonReactRouter basename="/rations">
        <IonTabs>
          <IonRouterOutlet>

            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="budgets" href="/">
              <IonIcon icon={document} />
              <IonLabel>Budgets</IonLabel>
            </IonTabButton>

            <IonTabButton tab="about" href="/about">
              <IonIcon icon={informationCircle} />
              <IonLabel>About</IonLabel>
            </IonTabButton>

          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;