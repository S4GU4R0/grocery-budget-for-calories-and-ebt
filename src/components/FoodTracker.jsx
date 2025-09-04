import React, { useState, useRef } from 'react';
import {
  IonToolbar,
  IonButtons,
  IonButton,
  IonChip,
  IonLabel,
  IonBadge,
  IonGrid,
  IonRow,
  IonCol,
  IonInput
} from '@ionic/react';
import CSVImport from "./CSVImport"
import './style.css';

const FoodTracker = () => {
  const [caloriesNeededPerDay, setCaloriesNeededPerDay] = useState(2300);
  const [ebtPerMonth, setEbtPerMonth] = useState(290);
  const [rows, setRows] = useState([
    { id: 1, name: 'Spaghetti', calories: 1600, cost: 0.98 },
  ]);
  const [showMenu, setShowMenu] = useState(false);
  const fileInputRef = useRef(null);
  // Calculate totals
  const totalCalories = rows.reduce((sum, row) => sum + (row.calories || 0), 0);
  const totalCost = rows.reduce((sum, row) => sum + (row.cost || 0), 0);
  const caloriesPerMonth = caloriesNeededPerDay * 31;
  const amountLeft = ebtPerMonth - totalCost;

  // Check if targets are met for color coding
  const caloriesTargetMet = totalCalories >= caloriesPerMonth;
  const costTargetMet = totalCost <= ebtPerMonth;
  // csv import stuff
  const handleImportComplete = (data) => {
    console.log('Imported data:', data);
    // Process the data (send to API, etc.)
  };

  const customMappingTemplate = {
    'name': 'Name',
    'cost': 'Cost',
    'calories': 'calories'
  };

  // Add a new row
  const addNewRow = () => {
    const newId =
      rows.length > 0 ? Math.max(...rows.map((row) => row.id)) + 1 : 1;
    setRows([...rows, { id: newId, name: '', calories: 0, cost: 0 }]);
  };

  // Update a row
  const updateRow = (id, field, value) => {
    setRows(
      rows.map((row) =>
        row.id === id
          ? { ...row, [field]: field === 'name' ? value : Number(value) }
          : row
      )
    );
  };

  // Menu options
  const menuOptions = [
    {
      id: 1,
      label: 'Learn how to use the app',
      action: () => window.open('/tutorial', '_blank'),
    },
    { id: 2, label: 'FAQ', action: () => window.open('/faq', '_blank') },
    {
      id: 3,
      label: 'Support the creator',
      action: () => window.open('/support', '_blank'),
    },
  ];

  return (
    <div>
      <CSVImport
        onComplete={handleImportComplete}
        mappingTemplate={customMappingTemplate}
      />
      <IonGrid className="table-container">
        <IonRow className="table-header-row">
          <IonCol>Calories/Day</IonCol>
          <IonCol></IonCol>
          <IonCol>Calories/Month</IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonInput
              type="number"
              onInput={(e) => setCaloriesNeededPerDay(Number(e.target.value))}
              value={caloriesNeededPerDay}
              className="number-input"
            />
          </IonCol>
          <IonCol></IonCol>
          <IonCol>{caloriesPerMonth}</IonCol>
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
              onInput={(e) => setEbtPerMonth(Number(e.target.value))}
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
        </IonRow>

        {rows.map((item) => (
          <IonRow key={item.id} className="data-row">
            <IonCol>
              <IonInput
                type="text"
                value={item.name}
                onInput={(e) => updateRow(item.id, 'name', e.target.value)}
                placeholder="Item name"
                className="text-input"
              />
            </IonCol>
            <IonCol>
              <IonInput
                type="number"
                value={item.calories}
                onInput={(e) => updateRow(item.id, 'calories', e.target.value)}
                className="number-input"
              />
            </IonCol>
            <IonCol>
              <IonInput
                type="number"
                step="0.01"
                value={item.cost}
                onInput={(e) => updateRow(item.id, 'cost', e.target.value)}
                className="number-input"
              />
            </IonCol>
          </IonRow>
        ))}
      </IonGrid>

      {/* Sticky Footer */}
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
    </div>
  );
};

export default FoodTracker;
