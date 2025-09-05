import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonChip,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/react";
import React, { useState } from "react";
import FoodTracker from "../components/FoodTracker"
import "./Home.css";

const Home: React.FC = () => {
  // Move all the state and logic from FoodTracker here
  const [rows, setRows] = useState([
    { id: 1, name: '', calories: 0, cost: 0 }
  ]);
  const [ebtPerMonth, setEbtPerMonth] = useState(0);

  const addNewRow = () => {
    const newId = Math.max(...rows.map(r => r.id)) + 1;
    setRows([...rows, { id: newId, name: '', calories: 0, cost: 0 }]);
  };

  const updateRow = (id: number, field: string, value: any) => {
    setRows(rows.map(row =>
      row.id === id ? { ...row, [field]: value } : row
    ));
  };

  // Calculate totals
  const totalCalories = rows.reduce((sum, row) => sum + (Number(row.calories) || 0), 0);
  const totalCost = rows.reduce((sum, row) => sum + (Number(row.cost) || 0), 0);
  const caloriesPerMonth = 2000 * 30; // Example calculation
  const caloriesTargetMet = totalCalories >= caloriesPerMonth;
  const amountLeft = ebtPerMonth - totalCost;

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
        <FoodTracker
          rows={rows}
          updateRow={updateRow}
          ebtPerMonth={ebtPerMonth}
          setEbtPerMonth={setEbtPerMonth}
          totalCalories={totalCalories}
          totalCost={totalCost}
          caloriesPerMonth={caloriesPerMonth}
        />
      </IonContent>

      <IonToolbar>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton onClick={addNewRow} expand="block">
                + Add New Item
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonChip color={caloriesTargetMet ? "success" : "danger"}>
                <div>
                  <div>Caloric Need Met?</div>
                  <div>
                    <span>{totalCalories}</span> / <span>{caloriesPerMonth}</span>
                  </div>
                </div>
              </IonChip>
            </IonCol>
            <IonCol>
              <IonChip color={amountLeft >= 0 ? "success" : "danger"}>
                <div>
                  <div>Stayed in Budget?</div>
                  <div>
                    <span>${totalCost.toFixed(2)}</span> / <span>${amountLeft.toFixed(2)}</span>
                  </div>
                </div>
              </IonChip>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonPage>
  );
};

export default Home;