import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonText,
    IonChip,
    IonButtons,
    IonBackButton
} from '@ionic/react';
import {
    calculator,
    card,
    checkmarkCircle,
    closeCircle,
    add,
    restaurant,
    wallet
} from 'ionicons/icons';

const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>How to Use Rations</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Welcome</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText>
                            <p>Rations helps you maximize your food budget by tracking calories and costs to ensure you get the most nutrition for your money.</p>
                        </IonText>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>About RATIONS</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText>
                            <p>Rations was built by S4GU4R0 to make sure he gets enough food in his monthly grocery trip while staying in budget. You can support him by sending him a tip on CashApp or Venmo.</p>
                        </IonText>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Getting Started</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                <IonIcon icon={calculator} slot="start" color="primary" />
                                <IonLabel>
                                    <h3>Set Your Daily Calories</h3>
                                    <p>The app calculates 31 days' worth of calories for you.</p>
                                </IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonIcon icon={wallet} slot="start" color="primary" />
                                <IonLabel>
                                    <h3>Set Your EBT Allotment</h3>
                                    <p>You can se apps like Propel to check your balance or deposits.</p>
                                </IonLabel>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Adding Food Items</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                <IonIcon icon={restaurant} slot="start" color="success" />
                                <IonLabel>
                                    <h3>Item Name</h3>
                                    <p>Enter the food item (e.g., "Rice", "Chicken", "Eggs")</p>
                                </IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonIcon icon={calculator} slot="start" color="success" />
                                <IonLabel>
                                    <h3>Calories</h3>
                                    <p>Enter the total calories for the quantity you're buying</p>
                                </IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonIcon icon={card} slot="start" color="success" />
                                <IonLabel>
                                    <h3>Cost</h3>
                                    <p>Enter the price of the item</p>
                                </IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonIcon icon={add} slot="start" color="success" />
                                <IonLabel>
                                    <h3>Add More Items</h3>
                                    <p>Use the "+ Add New Item" button to add more foods</p>
                                </IonLabel>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Understanding the Results</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText>
                            <p>The bottom of the screen shows two important indicators:</p>
                        </IonText>

                        <div style={{ margin: '16px 0' }}>
                            <IonChip color="success">
                                <IonIcon icon={checkmarkCircle} />
                                <IonLabel>Caloric Need Met</IonLabel>
                            </IonChip>
                            <IonText color="success">
                                <p style={{ margin: '8px 0' }}>Green means you're getting enough calories for the month</p>
                            </IonText>
                        </div>

                        <div style={{ margin: '16px 0' }}>
                            <IonChip color="danger">
                                <IonIcon icon={closeCircle} />
                                <IonLabel>Caloric Need Not Met</IonLabel>
                            </IonChip>
                            <IonText color="danger">
                                <p style={{ margin: '8px 0' }}>Red means you need more calories</p>
                            </IonText>
                        </div>

                        <div style={{ margin: '16px 0' }}>
                            <IonChip color="success">
                                <IonIcon icon={checkmarkCircle} />
                                <IonLabel>Stayed in Budget</IonLabel>
                            </IonChip>
                            <IonText color="success">
                                <p style={{ margin: '8px 0' }}>Green means you're within your food budget</p>
                            </IonText>
                        </div>

                        <div style={{ margin: '16px 0' }}>
                            <IonChip color="danger">
                                <IonIcon icon={closeCircle} />
                                <IonLabel>Over Budget</IonLabel>
                            </IonChip>
                            <IonText color="danger">
                                <p style={{ margin: '8px 0' }}>Red means you're spending too much</p>
                            </IonText>
                        </div>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>CSV Import</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                <IonLabel>
                                    <h3>Headers are required</h3>
                                    <p>Your CSV file's first row shhould be the labels for the columns.</p>
                                </IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonLabel>
                                    <h3>Name, Calories, Cost, Notes</h3>
                                    <p>These are the header names you need in your file. They are case insensitive.</p>
                                </IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonLabel>
                                    <h3>To save your file </h3>
                                    <p>export the CSV. Be sure to only overwrite if that's what you indeed want.</p>
                                </IonLabel>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default About;