import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import FoodTracker from "../components/FoodTracker.js"
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text={``} />
          </IonButtons>
          <IonTitle>rations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <FoodTracker />
      </IonContent>
    </IonPage>
  );
};

export default Home;
