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
                        <IonCardTitle>Welcome to Rations</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText>
                            <p>Rations helps you maximize your food budget by tracking calories and costs to ensure you get the most nutrition for your money.</p>
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
                                    <h3>Set Your Monthly Calories</h3>
                                    <p>The app calculates 60,000 calories per month (2,000 calories × 30 days) as your target.</p>
                                </IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonIcon icon={wallet} slot="start" color="primary" />
                                <IonLabel>
                                    <h3>Enter Your EBT Allotment</h3>
                                    <p>Input your monthly food budget in the "EBT Allotment/Month" field.</p>
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
                        <IonCardTitle>Tips for Success</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                <IonLabel>
                                    <h3>Focus on Calorie-Dense Foods</h3>
                                    <p>Rice, pasta, beans, and oats provide many calories per dollar</p>
                                </IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonLabel>
                                    <h3>Buy in Bulk</h3>
                                    <p>Larger quantities often have better per-calorie pricing</p>
                                </IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonLabel>
                                    <h3>Check Unit Prices</h3>
                                    <p>Compare cost per pound or per ounce, not just total price</p>
                                </IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonLabel>
                                    <h3>Balance Nutrition</h3>
                                    <p>Include proteins, vegetables, and healthy fats alongside staples</p>
                                </IonLabel>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Example Shopping List</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText>
                            <p><strong>Item:</strong> White Rice (20 lbs)</p>
                            <p><strong>Calories:</strong> 29,000</p>
                            <p><strong>Cost:</strong> $15.00</p>
                            <p><strong>Calories per dollar:</strong> 1,933</p>
                        </IonText>

                        <IonText>
                            <p><strong>Item:</strong> Dried Beans (5 lbs)</p>
                            <p><strong>Calories:</strong> 7,700</p>
                            <p><strong>Cost:</strong> $8.00</p>
                            <p><strong>Calories per dollar:</strong> 963</p>
                        </IonText>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default About;