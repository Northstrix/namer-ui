'use client'

import React, { useState, useEffect, useCallback } from 'react'
import ChronicleButton from '@/app/the-actual-components/chronicle-button/ChronicleButton'
import FileContainer from '@/app/the-actual-components/file-container/FileContainer'
import FishyButton from '@/app/the-actual-components/fishy-button/FishyButton'
import FishyFileDrop from '@/app/the-actual-components/fishy-file-drop/FishyFileDrop'
import PositionAwareButton from '@/app/the-actual-components/position-aware-button/PositionAwareButton'
import FancyNotification from '@/app/the-actual-components/fancy-notification/FancyNotification'
import MagicButton from '@/app/the-actual-components/magic-button/MagicButton'
import HalomotButton from '@/app/the-actual-components/halomot-button/HalomotButton'
import { ShamayimToggleSwitch } from '@/app/the-actual-components/shamayim-toggle-switch/ShamayimToggleSwitch'
import SkeuomorphicToggle from '@/app/the-actual-components/skeuomorphic-toggle/SkeuomorphicToggle'
import RisingDroplets from '@/app/the-actual-components/rising-droplets/RisingDroplets'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Metadata {
  usage: string;
  code: React.ReactNode;
  dependencies: string;
  credit: React.ReactNode;
}

interface CodeFile {
  filename: string; // The name of the file
  content: string; // The content of the file
}

const components = [
  { id: 'chronicle-button', name: 'Chronicle Button', description: 'A button with a unique hover effect.' },
  { id: 'file-container', name: 'File Container', description: 'A container for displaying file information.' },
  { id: 'fishy-button', name: 'Fishy Button', description: 'A sleek button featuring floating fish that appear on hover.' },
  { id: 'fishy-file-drop', name: 'Fishy File Drop', description: 'A very unorthodox dropzone.' },
  { id: 'position-aware-button', name: 'Position-Aware Button', description: 'A button with a dynamic hover effect that responds to mouse movements.' },
  { id: 'fancy-notification', name: 'Fancy Notification', description: 'An animated rectangle notification.' },
  { id: 'magic-button', name: 'Magic Button', description: 'A button that employs moving particles.' },
  { id: 'halomot-button', name: 'Halomot Button', description: 'A stylish button with a vibrant gradient that fills it on hover.' },
  { id: 'shamayim-toggle-switch', name: 'Shamayim Toggle Switch', description: 'A celestial-themed toggle switch with a smooth animation and mirroring option.' },
  { id: 'skeuomorphic-toggle', name: 'Skeuomorphic Switch', description: 'A skeuomorphic toggle switch with customizable colors, inscriptions, and mirroring option.' },
  { id: 'rising-droplets', name: 'Rising Droplets', description: 'An animation of droplets rising from the bottom of the container to the top,' }
]

//console.log(`There are ${components.length} components available.`);

export default function ComponentsPage() {
  const [activeComponent, setActiveComponent] = useState(components[0].id)
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
  const [metadata, setMetadata] = useState<Metadata | null>(null)
  
  useEffect(() => {
    const loadComponent = async () => {
      const mod = await import(`@/app/the-actual-components/${activeComponent}/index`)
      setMetadata(mod.metadata)
    }

    loadComponent()
  }, [activeComponent])

  const handleFilesFromFishyFileDrop = async (files: FileList): Promise<void> => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      toast.info(`File N${i + 1}: ${file.name}`);
    }
  };

  // Fancy Notification stuff //
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState<'success' | 'error'>('success');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationMessage1, setNotificationMessage1] = useState('');

  // Custom messages
  const customSuccessMessage = "It's done";
  const customErrorMessage = 'Yeap!';

  const showSuccessNotification = () => {
    setNotificationStatus('success');
    setNotificationMessage("The success notification");
    setNotificationMessage1('opened successfully!');
    setIsNotificationVisible(true);
  };

  const showErrorNotification = () => {
    setNotificationStatus('error');
    setNotificationMessage("This notification");
    setNotificationMessage1('should show an error!');
    setIsNotificationVisible(true);
  };

  const handleNotificationClose = () => {
    setIsNotificationVisible(false);
  };
  // Fancy Notification stuff //
  
  
  // Skeuomorphic Setting Switches stuff //
  const [hydration, setHydration] = useState(true);
  const [notifications, setNotifications] = useState(false);
  const [autoSave, setAutoSave] = useState(false);

  const logStateChange = useCallback((name: string, value: boolean) => {
    toast.info(`${name} changed to: ${value}`);
  }, []);

  const handleHydrationChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setHydration(e.target.checked);
    logStateChange('Hydration', e.target.checked);
  }, [logStateChange]);

  const handleNotificationsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNotifications(e.target.checked);
    logStateChange('Notifications', e.target.checked);
  }, [logStateChange]);

  const handleAutoSaveChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAutoSave(e.target.checked);
    logStateChange('Auto-Save', e.target.checked);
  }, [logStateChange]);
  // Skeuomorphic Setting Switches stuff //

  // Rising Droplets stuff //
  const [loaderVisible, setLoaderVisible] = useState(false);

  const toggleLoader = () => {
    if (loaderVisible) {
      setLoaderVisible(false);
    } else {
      setLoaderVisible(true);
    }
  };
  // Rising Droplets stuff //

  const renderComponent = () => {
    switch(activeComponent) {
      case 'chronicle-button':
        return (
          <div className="bg-base-300 p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
            <ChronicleButton 
              text='Hover Me'
              onClick={() => toast.info("The first button has been clicked")} 
            />
            <ChronicleButton 
              text='The blue one'
              onClick={() => toast.info("The blue button has been clicked")} 
              width="200px"
              hoverColor="#90BAFD"
            />
            <ChronicleButton 
              text="Outlined (-6px)" 
              onClick={() => toast.info("The outlined button has been clicked")} 
              hoverColor="#CC8DFD"
              width="200px"
              outlined={true}
              outlinePaddingAdjustment="6px"
            />
          </div>
        );
      case 'file-container':
        return (
          <div className="bg-base-300 p-8 rounded-lg min-h-[300px] gap-7 flex items-center justify-center">
            {/* Basic usage example */}
            <FileContainer 
              id="1" // Unique identifier for the container
              title="Miami_skyline_at_night.jpg" // Title of the file
              fileSize="Size: 4.51 MB" // Size of the file displayed to the user
              description="A stunning photograph of the Miami skyline illuminated at night, showcasing the vibrant city lights and reflections on the water." // Description of the file's content
              onFilledButtonClick={(id) => toast.info(`Filled button clicked for file (ID: N${id})`)} // Replace console.log with toast.info
              onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for file (ID: N${id})`)} // Replace console.log with toast.info
              onTitleClick={(id) => toast.info(`Title clicked for file (ID: N${id})`)} // Replace console.log with toast.info
              onDescriptionClick={(id) => toast.info(`Description clicked for file (ID: N${id})`)} // Replace console.log with toast.info
              filledButtonInscription="Download" // Required text for filled button inscription
              outlinedButtonInscription="Properties" // Required text for outlined button inscription
              borderWidth={2} // Width of the border (optional, default is 2)
            />

            {/* Second container for a zip archive, fully in Hebrew with swapped buttons */}
            <FileContainer 
              id="2" // Unique identifier for the container
              title="קובץ_דחוס_חשוב.zip" // "Important Compressed File"
              fileSize="גודל: 100.12 MB" // "Size:" in Hebrew
              description="קובץ דחוס המכיל מסמכים חשובים שצריך לעבור עליהם לפני הפגישה, כולל דוחות ומצגות." // "A compressed file containing important documents to review before the meeting, including reports and presentations."
              onFilledButtonClick={(id) => toast.info(`Filled button clicked for file (ID: N${id})`)} // Replace console.log with toast.info
              onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for file (ID: N${id})`)} // Replace console.log with toast.info
              onTitleClick={(id) => toast.info(`Title clicked for file (ID: N${id})`)} // Replace console.log with toast.info
              onDescriptionClick={(id) => toast.info(`Description clicked for file (ID: N${id})`)} // Replace console.log with toast.info
              metadataIntegrity={true} // Indicates if metadata integrity is maintained (optional)
              filledButtonInscription="הורדה" // "Download" in Hebrew (required)
              outlinedButtonInscription="שתף" // "Share" in Hebrew (required)
              swapButtons={true} // Optional, defaults to false; determines if buttons should be swapped
              borderWidth={3} // Width of the border (optional)
            />

            {/* Third container for a TypeScript file */}
            <FileContainer 
              id="3" // Unique identifier for the container
              title="FileContainer.tsx" // Title of the TypeScript file
              fileSize="Size: 15.3 KB" // Size of the TypeScript file displayed to the user
              description="This TypeScript file contains essential components and logic for rendering the FileContainer component in your application." // Description of its content
              onFilledButtonClick={(id) => toast.info(`Filled button clicked for file (ID: N${id})`)} // Replace console.log with toast.info
              onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for file (ID: N${id})`)} // Replace console.log with toast.info
              onTitleClick={(id) => toast.info(`Title clicked for file (ID: N${id})`)} // Replace console.log with toast.info
              onDescriptionClick={(id) => toast.info(`Description clicked for file (ID: N${id})`)} // Replace console.log with toast.info
              metadataIntegrity={false} // Indicates if metadata integrity is maintained (optional)
              filledButtonInscription="Send" // Required text for filled button inscription
              outlinedButtonInscription="More" // Required text for outlined button inscription
              borderWidth={1} // Width of the border (optional)
            />

            {/* Fourth container for a JavaScript definition file */}
            <FileContainer 
              id="4" // Unique identifier for the container
              title="app_logic.js" // Title of the JavaScript file
              fileSize="Size: 45.7 KB" // Size of the JavaScript file displayed to the user
              description="This JavaScript file contains essential application logic that is crucial for the functionality of the web application. Ensure all functions are properly defined." // Description of its content
              onFilledButtonClick={(id) => toast.info(`Filled button clicked for file (ID: N${id})`)} // Replace console.log with toast.info
              onOutlinedButtonClick={(id) => toast.info(`Outlined button clicked for file (ID: N${id})`)} // Replace console.log with toast.info
              onTitleClick={(id) => toast.info(`Title clicked for file (ID: N${id})`)} // Replace console.log with toast.info
              onDescriptionClick={(id) => toast.info(`Description clicked for file (ID: N${id})`)} // Replace console.log with toast.info
              filledButtonInscription="Download" // Required text for filled button inscription
              outlinedButtonInscription="Properties" // Required text for outlined button inscription
              borderWidth={4} // Width of the border (optional)
            />
          </div>
        );
      case 'fishy-button':
        return (
          <div className="bg-base-300 p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
            <FishyButton type="button" className={`button--1`}
              onClick={() => toast.info("The first button has been clicked")} 
            >
              Ekhad
            </FishyButton>
            <FishyButton type="button" className={`button--2`}
              onClick={() => toast.info("The second button has been clicked")} 
            >
              Two
            </FishyButton>
            <FishyButton type="button" className={`button--3`}
              onClick={() => toast.info("The third button has been clicked")} 
            >
              Shalosh
            </FishyButton>
          </div>
        );
      case 'fishy-file-drop':
        return (
          <div className="bg-base-300 p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
            <FishyFileDrop onFilesSelected={handleFilesFromFishyFileDrop} />
          </div>
        );
      case 'position-aware-button':
        return (
          <div className="bg-[#EDEDED] p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
            <PositionAwareButton 
              buttonText="Click Me!"
              onClick={() => toast.info("The first button has been clicked")}
            />
            <PositionAwareButton 
              buttonText="Click Me Too!"
              buttonWidth="220px"
              borderRadius="0.76em"
              buttonColor="#6A0DAD"
              onClick={() => toast.info("The second button has been clicked")}
            />
          </div>
        );
      case 'fancy-notification':
        return (
          <div className="bg-base-300 p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
            <ChronicleButton 
              text='Success'
              onClick={showSuccessNotification}
            />
            <ChronicleButton 
              text='Error'
              onClick={showErrorNotification}
              hoverColor="#ff6b7e"
            />
            <FancyNotification
              type={notificationStatus}
              message={notificationMessage}
              message1={notificationMessage1}
              isVisible={isNotificationVisible}
              onClose={handleNotificationClose}
              successMessage={customSuccessMessage} // Pass custom success message
              errorMessage={customErrorMessage}     // Pass custom error message
            />
          </div>
        );
      case 'magic-button':
        return (
          <div className="bg-base-300 p-8 rounded-lg min-h-[300px] gap-12 flex items-center justify-center">
             <MagicButton onButtonClick={() => toast.info("The magic button has been clicked")} inscription="Magic Button" />

             <MagicButton onButtonClick={() => toast.info("The small magic button has been clicked")} inscription="That one's smaller!" fontSize="1rem"/>
          </div>
        );
      case 'halomot-button':
        return (
          <div className="bg-base-300 p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
            <HalomotButton 
              inscription="חלומות" 
              onClick={() => toast.info("Halomot button has been clicked!")}
            />
          </div>
        );
      case 'shamayim-toggle-switch':
        return (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1em',
            minHeight: '300px',
            borderRadius: '0.5rem',
            backgroundImage: 'linear-gradient(45deg, #47b6d1, #90e0ec)',
            fontSize: '2em',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
              <span style={{ color: '#E0F9FC' }}>Mobile Data</span>
              <ShamayimToggleSwitch 
              defaultState={false} 
              onChange={(isOn) => toast.info(`Top switch is now ${isOn ? 'ON' : 'OFF'}`)} 
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
              <ShamayimToggleSwitch 
              defaultState={false} 
              mirrored 
              onChange={(isOn) => toast.info(`Bottom switch is now ${isOn ? 'ON' : 'OFF'}`)} 
              />
              <span style={{ color: '#E0F9FC' }}>נתונים סלולריים</span>
            </div>
          </div>
        );
      case 'skeuomorphic-toggle':
        return (
          <div className="bg-[#2e3138] p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center">
            <div style={{ 
              minHeight: '300px', 
              borderRadius: '0.5rem', 
              backgroundColor: '#454954', 
              color: '#e0e0e0',
              padding: '20px',
              transition: 'background-color 0.3s, color 0.3s'
            }}>
              <h1 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold'}}>Settings</h1>
              
              <div style={{ width: '250px', margin: '0 auto' }}>
                <SkeuomorphicToggle
                  label="Hydration"
                  name="hydration"
                  checked={hydration}
                  onChange={handleHydrationChange}
                  onText="ON"
                  offText="OFF"
                  hue={210}
                  hueSuccess={120}
                />
      
                <SkeuomorphicToggle
                  label="Notifications"
                  name="notifications"
                  checked={notifications}
                  onChange={handleNotificationsChange}
                  onText="ON"
                  offText="OFF"
                  hue={180}
                  hueSuccess={90}
                />
      
                <SkeuomorphicToggle
                  label="Auto-Save"
                  name="autoSave"
                  checked={autoSave}
                  onChange={handleAutoSaveChange}
                  onText="YES"
                  offText="NO"
                  hue={260}
                  hueSuccess={45}
                />
              </div>
            </div>
          </div>
        );
      case 'rising-droplets':
        return (
          <div className="bg-base-300 p-8 rounded-lg min-h-[300px] gap-6 flex items-center justify-center relative">
            <ChronicleButton text='Enable/Disable' onClick={toggleLoader} />
   
            {loaderVisible && (
              <RisingDroplets colors={['#059FF6', '#8A2BE2', '#FF8C00']} />
            )}
          </div>
        );
      default:
        return <div>No preview available.</div>;
    }
  };

  return (
    <div className="flex">
      <ToastContainer
        position="bottom-right" // Position of the container
        autoClose={5000}        // Duration for all toasts in this container
        hideProgressBar={false} // Show progress bar for all toasts
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <aside className="w-64 bg-base-200 p-4">
        <h2 className="text-2xl font-bold mb-4">Components</h2>
        <ul className="menu bg-base-200 w-56 rounded-box">
          {components.map((component) => (
            <li key={component.id}>
              <button
                onClick={() => setActiveComponent(component.id)}
                className={`w-full text-left ${activeComponent === component.id ? 'font-bold' : ''}`}
              >
                {component.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-2">{components.find(c => c.id === activeComponent)?.name}</h1>
        <p className="text-gray-500 mb-6">{components.find(c => c.id === activeComponent)?.description}</p>

        <div className="tabs tabs-boxed mb-4">
          <button 
            className={`tab ${activeTab === 'preview' ? 'tab-active' : ''}`} 
            onClick={() => setActiveTab('preview')}
          >
            Preview
          </button>
          <button 
            className={`tab ${activeTab === 'code' ? 'tab-active' : ''}`} 
            onClick={() => setActiveTab('code')}
          >
            Code
          </button>
        </div>
        
        {activeTab === 'preview' ? renderComponent() : (
          <div className="overflow-x-auto">
            {/* Displaying code with filenames clearly distinguished */}
            {metadata?.code ? (
              (metadata.code as CodeFile[]).map(({ filename, content }) => ( // Cast metadata.code to CodeFile[]
                <div key={filename} className="mb-8">
                  <h3 className="font-bold mb-4 text-lg">{filename}</h3> {/* Filename displayed prominently */}
                  <pre className="bg-base-200 p-4 rounded-lg overflow-x-auto">{content}</pre> {/* Code content */}
                </div>
              ))
            ) : (
              <p>No code available.</p> // Fallback if no code is available
            )}
          </div>
        )}

        <section className="mb-6 mt-6">
          <h2 className="text-lg font-bold mb-2">Usage</h2>
          <hr />
          <pre>{metadata?.usage}</pre>
        </section>

        <section className="mb-6 mt-6">
          <h2 className="text-lg font-bold mb-2">Dependencies</h2>
          <hr />
          <pre>{metadata?.dependencies}</pre>
        </section>

        <section className="mb-6 mt-6">
          <h2 className="text-lg font-bold mb-2">Credit</h2>
          <hr />
          <p>{metadata?.credit}</p>
        </section>
      </main>
    </div>
  )
}