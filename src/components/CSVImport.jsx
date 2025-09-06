import React, { useState, useRef } from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
    IonAlert,
    IonProgressBar,
    IonList,
    IonSelect,
    IonSelectOption,
    IonIcon,
    IonText,
    IonGrid,
    IonRow,
    IonCol,
    IonListHeader,
    IonNote
} from '@ionic/react';
import { documentOutline, cloudUploadOutline, closeOutline, checkmarkOutline } from 'ionicons/icons';
import Papa from 'papaparse';

const CSVImport = ({ onComplete, mappingTemplate }) => {
    const [csvData, setCsvData] = useState([]);
    const [headerRow, setHeaderRow] = useState([]);
    const [mapping, setMapping] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [previewData, setPreviewData] = useState([]);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            // Check if file is CSV
            if (!file.name.toLowerCase().endsWith('.csv')) {
                setError('Please select a CSV file');
                setShowAlert(true);
                return;
            }

            parseCSV(file);
        }
    };

    const parseCSV = (file) => {
        setIsLoading(true);
        setProgress(30);

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                if (results.data && results.data.length > 0) {
                    setCsvData(results.data);
                    setHeaderRow(results.meta.fields || []);
                    setPreviewData(results.data.slice(0, 3)); // Preview first 3 rows
                    initializeMapping(results.meta.fields || []);
                } else {
                    setError('CSV file is empty or invalid');
                    setShowAlert(true);
                }
                setIsLoading(false);
                setProgress(100);
            },
            error: (error) => {
                setError(error.message);
                setShowAlert(true);
                setIsLoading(false);
            }
        });
    };

    const initializeMapping = (headers) => {
        const initialMapping = {};
        headers.forEach(header => {
            initialMapping[header] = mappingTemplate[header] || '';
        });
        setMapping(initialMapping);
    };

    const handleMappingChange = (csvHeader, targetField) => {
        setMapping(prev => ({
            ...prev,
            [csvHeader]: targetField
        }));
    };

    const transformData = () => {
        return csvData.map(row => {
            const transformedRow = {};
            Object.entries(mapping).forEach(([csvHeader, targetField]) => {
                if (targetField && row[csvHeader] !== undefined) {
                    transformedRow[targetField] = row[csvHeader];
                }
            });
            return transformedRow;
        });
    };

    const handleUpload = async () => {
        // Validate mapping
        const unmappedColumns = Object.values(mapping).filter(value => !value);
        if (unmappedColumns.length > 0) {
            setError('Please map all columns before uploading');
            setShowAlert(true);
            return;
        }

        const transformedData = transformData();
        setIsLoading(true);
        setProgress(0);

        try {
            // Simulate upload with progress
            for (let i = 0; i <= 100; i += 10) {
                setProgress(i);
                await new Promise(resolve => setTimeout(resolve, 200));
            }

            if (onComplete) {
                onComplete(transformedData);
            }
        } catch (err) {
            console.log({ err })
            setError('Upload failed. Please try again.');
            setShowAlert(true);
        } finally {
            setIsLoading(false);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const resetComponent = () => {
        setCsvData([]);
        setHeaderRow([]);
        setMapping({});
        setPreviewData([]);
        setProgress(0);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>CSV Import</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                <input
                    type="file"
                    accept=".csv"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />

                {csvData.length === 0 ? (
                    <div>
                        <IonText color="medium">
                            <p>Select a CSV file to import data. The file should contain column headers in the first row.</p>
                        </IonText>
                        <IonButton expand="block" onClick={triggerFileInput} disabled={isLoading}>
                            <IonIcon icon={documentOutline} slot="start" />
                            Select CSV File
                        </IonButton>

                        {isLoading && (
                            <IonItem>
                                <IonLabel>Parsing CSV</IonLabel>
                                <IonProgressBar value={progress / 100}></IonProgressBar>
                            </IonItem>
                        )}
                    </div>
                ) : (
                    <div>
                        <IonItem>
                            <IonLabel>File Selected</IonLabel>
                            <IonButton fill="clear" onClick={resetComponent}>
                                <IonIcon icon={closeOutline} />
                            </IonButton>
                        </IonItem>

                        <IonListHeader>
                            <IonLabel>Column Mapping</IonLabel>
                        </IonListHeader>

                        <IonText color="medium">
                            <p>ake sure the equivalent data goes in the right spot:</p>
                        </IonText>

                        <IonList>
                            {headerRow.map(header => (
                                <IonItem key={header}>
                                    <IonLabel position="stacked">{header}</IonLabel>
                                    <IonSelect
                                        value={mapping[header]}
                                        placeholder="Select Target Field"
                                        onIonChange={e => handleMappingChange(header, e.detail.value)}
                                        interface="action-sheet"
                                    >
                                        {Object.entries(mappingTemplate).map(([key, value]) => (
                                            <IonSelectOption key={key} value={value}>
                                                {value}
                                            </IonSelectOption>
                                        ))}
                                    </IonSelect>
                                </IonItem>
                            ))}
                        </IonList>

                        {previewData.length > 0 && (
                            <div>
                                <IonListHeader>
                                    <IonLabel>Data Preview</IonLabel>
                                </IonListHeader>

                                <IonGrid>
                                    <IonRow>
                                        {headerRow.map(header => (
                                            <IonCol key={header} size="auto">
                                                <IonText color="primary">
                                                    <strong>{header}</strong>
                                                </IonText>
                                            </IonCol>
                                        ))}
                                    </IonRow>

                                    {previewData.map((row, index) => (
                                        <IonRow key={index}>
                                            {headerRow.map(header => (
                                                <IonCol key={header} size="auto">
                                                    <IonText>{row[header] || ''}</IonText>
                                                </IonCol>
                                            ))}
                                        </IonRow>
                                    ))}
                                </IonGrid>

                                <IonNote>
                                    <p>Showing first {previewData.length} rows of {csvData.length} total</p>
                                </IonNote>
                            </div>
                        )}

                        <IonButton expand="block" onClick={handleUpload} disabled={isLoading}>
                            <IonIcon icon={cloudUploadOutline} slot="start" />
                            Import Data
                        </IonButton>

                        {isLoading && (
                            <IonItem>
                                <IonLabel>Upload Progress</IonLabel>
                                <IonProgressBar value={progress / 100}></IonProgressBar>
                            </IonItem>
                        )}
                    </div>
                )}

                <IonAlert
                    isOpen={showAlert}
                    onDidDismiss={() => setShowAlert(false)}
                    header={'Error'}
                    message={error || 'An error occurred'}
                    buttons={['OK']}
                />
            </IonCardContent>
        </IonCard>
    );
};

export default CSVImport;