import React from 'react';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
} from '@ionic/react';
import CSVImport from './CSVImport';
import './style.css';

const FoodTracker = ({
  setRows,
  rows,
  updateRow,
  ebtPerMonth,
  setEbtPerMonth,
  totalCalories,
  totalCost,
  caloriesPerMonth
}) => {

  // csv import stuff
  const handleImportComplete = (data) => {
    console.log('Imported data:', data);
    // Process the data (send to API, etc.)
    setRows(data)
  };

  const customMappingTemplate = {
    'name': 'name',
    'cost': 'cost',
    'calories': 'calories',
    "notes": "notes"
  };


  return (
    <div className="app-container">
      <CSVImport
        onComplete={handleImportComplete}
        mappingTemplate={customMappingTemplate}
      />
      <IonGrid className="table-container">
        <IonRow className="table-header-row">
          <IonCol>Calories/Month</IonCol>
          <IonCol></IonCol>
          <IonCol></IonCol>
        </IonRow>

        <IonRow>
          <IonCol>{caloriesPerMonth}</IonCol>
          <IonCol></IonCol>
          <IonCol></IonCol>
        </IonRow>

        <IonRow className="table-header-row">
          <IonCol>EBT Allotment/Month</IonCol>
          <IonCol></IonCol>
          <IonCol></IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonInput
              type="number"
              onIonInput={(e) => setEbtPerMonth(Number(e.detail.value))}
              value={ebtPerMonth}
              className="number-input"
            />
          </IonCol>
          <IonCol></IonCol>
          <IonCol></IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="12" className="spacer"></IonCol>
        </IonRow>

        <IonRow className="table-header-row">
          <IonCol>Item</IonCol>
          <IonCol>Calories</IonCol>
          <IonCol>Cost</IonCol>
          <IonCol>Notes</IonCol>
        </IonRow>

        {rows.map((item) => (
          <IonRow key={item.id} className="data-row">
            <IonCol>
              <IonInput
                type="text"
                value={item.name}
                onIonInput={(e) => updateRow(item.id, 'name', e.detail.value)}
                placeholder="Item name"
                fill="clear"
                className="text-input"
              />
            </IonCol>
            <IonCol>
              <IonInput
                type="number"
                value={item.calories}
                onIonInput={(e) => updateRow(item.id, 'calories', e.detail.value)}
                fill="clear"
                className="number-input"
              />
            </IonCol>
            <IonCol>
              <IonInput
                type="number"
                step="0.01"
                value={item.cost}
                onIonInput={(e) => updateRow(item.id, 'cost', e.detail.value)}
                fill="clear"
                className="number-input"
              />
            </IonCol>
          </IonRow>
        ))}
      </IonGrid>
    </div>
  );
};

export default FoodTracker;