import React, { useState, useRef } from 'react';
import './App.css';
import SearchComponent from './SearchComponent';
import Topimage from './images/topimage.png';
import Logoimg from './images/VM.png';
import Sign from './images/DocDemoSign.png';
import { v4 as uuidv4 } from 'uuid';
import LoadingOverlay from './LoadingOverlay';

function App() {
  const [loading, setLoading] = useState(false);

  const elements = ['Abacavir 300mg', 'Abacavir / Lamivudine (Epzicom®) 600mg/300mg', 'Abacavir / Lamivudine / Dolutegravir (Triumeq®) 600mg/300mg/50mg', 'Abiraterone 250mg', 'Acetaminophen 500mg', 'Acetaminophen with codeine 300mg/30mg', 'Acyclovir 400mg', 'Adalimumab (Humira®) 40mg', 'Ado-trastuzumab emtansine (Kadcyla®) 100mg', 'Albuterol 90mg', 'Alendronate 70mg', 'Allopurinol 300mg', 'Alprazolam 1mg', 'Amikacin 500mg', 'Amiodarone 200mg', 'Amitriptyline 25mg', 'Ampicillin 500mg', 'Anastrozole 1mg', 'Aripiprazole 10mg', 'Asparaginase (Elspar®) 10,000IU', 'Aspirin 325mg', 'Atazanavir (Reyataz®) 300mg', 'Atenolol 50mg', 'Atomoxetine (Strattera®) 60mg', 'Atovaquone 750mg', 'Azathioprine 50mg', 'Azithromycin 500mg', 'Baclofen 10mg', 'Beclomethasone inhaler 40mg', 'Benazepril 20mg', 'Bendamustine 100mg', 'Bevacizumab (Avastin®) 25mg', 'Bictegravir / Emtricitabine / Tenofovir alafenamide (Biktarvy®) 50mg/200mg/25mg', 'Bivalirudin 250mg', 'Bortezomib (Velcade®) 3.5mg', 'Botulinum toxin type A 100 units', 'Brentuximab vedotin (Adcetris®) 50mg', 'Budesonide inhaler 200mcg', 'Bupropion (Wellbutrin®) 150mg', 'Busulfan 6mg', 'Calcium carbonate 500mg', 'Calcium carbonate with vitamin D 500mg/200IU', 'Captopril 50mg', 'Carbamazepine 200mg', 'Carboplatin 450mg', 'Carmustine 100mg', 'Carvedilol 25mg', 'Caspofungin 70mg', 'Cefazolin 1g', 'Cefepime 1g', 'Cefotaxime 1g', 'Cefoxitin 1g', 'Ceftazidime 1g', 'Ceftriaxone 1g', 'Cefuroxime 500mg', 'Celecoxib 200mg', 'Cephalexin 500mg', 'Cetirizine 10mg', 'Chlorambucil 2mg', 'Chloroquine 500mg', 'Chlorpromazine 100mg', 'Chlorthalidone 25mg', 'Ciprofloxacin 500mg', 'Cisplatin 50mg', 'Clarithromycin 500mg', 'Clindamycin 150mg', 'Clonazepam 0.5mg', 'Clonidine 0.1mg', 'Clopidogrel (Plavix®) 75mg', 'Clotrimazole (topical) 1%', 'Codeine 30mg', 'Conjugated estrogens (Premarin®) 0.625mg', 'Cyclobenzaprine 10mg', 'Cyclophosphamide 100mg', 'Cyclosporine 100mg', 'Cyproheptadine 4mg', 'Cytarabine 100mg', 'Darunavir (Prezista®) 600mg', 'Daunorubicin 20mg', 'Dexamethasone 4mg', 'Dexmedetomidine (Precedex®) 100mcg', 'Dextromethorphan with guaifenesin 20mg/400mg', 'Diazepam 5mg', 'Diclofenac 75mg', 'Dicyclomine 20mg', 'Diltiazem 60mg', 'Diphenhydramine 25mg', 'Dolo 650mg', 'Dobutamine 250mg', 'Docetaxel (Taxotere®) 20mg', 'Docusate sodium 100mg', 'Dopamine 200mg', 'Doripenem 500mg', 'Doxazosin 2mg', 'Doxorubicin 50mg', 'Duloxetine (Cymbalta®) 30mg', 'Ecallantide (Kalbitor®) 10mg', 'Efavirenz (Sustiva®) 600mg', 'Epoetin alfa (Procrit®) 10000 units', 'Epoetin alfa (Procrit®) 4000 units', 'Epoetin alfa (Procrit®) 6000 units', 'Erlotinib (Tarceva®) 150mg', 'Escitalopram (Lexapro®) 10mg', 'Esomeprazole (Nexium®) 40mg', 'Estrogen patches (Vivelle-Dot®) 0.05mg/day', 'Etanercept (Enbrel®) 25mg', 'Ethambutol 400mg', 'Ethinyl estradiol / Norethindrone (Lo Loestrin Fe®) 10mcg/1mg', 'Etomidate 40mg', 'Etoposide 100mg', 'Everolimus (Afinitor®) 5mg', 'Exenatide (Byetta®) 10mcg', 'Ezetimibe (Zetia®) 10mg', 'Felodipine 5mg', 'Filgrastim (Neupogen®) 300mcg', 'Finasteride 5mg', 'Fluconazole 150mg', 'Fludarabine 50mg', 'Fluorouracil (5-FU) 500mg', 'Fluoxetine (Prozac®) 20mg', 'Fluticasone nasal spray 50mcg', 'Fluticasone with salmeterol inhaler (Advair Diskus®) 250mcg/50mcg', 'Folic acid 1mg', 'Fosphenytoin (Cerebyx®) 100mg', 'Furosemide (Lasix®) 40mg', 'Gabapentin 300mg', 'Gefitinib (Iressa®) 250mg', 'Gemcitabine 1000mg', 'Gentamicin 80mg', 'Glatiramer acetate (Copaxone®) 20mg', 'Glimepiride 2mg', 'Glipizide 5mg', 'Glyburide 5mg', 'Goserelin (Zoladex®) 3.6mg', 'Granisetron (Kytril®) 1mg', 'Haloperidol 5mg', 'Heparin 5000 units', 'Hydrochlorothiazide 25mg', 'Hydrocodone with acetaminophen 5mg/325mg', 'Hydrocortisone cream 1%', 'Hydromorphone 2mg', 'Hydroxychloroquine (Plaquenil®) 200mg', 'Hydroxyzine 25mg', 'Imatinib (Gleevec®) 100mg', 'Imipenem / Cilastatin (Primaxin®) 500mg/500mg', 'Indomethacin 25mg', 'Insulin glargine (Lantus®) 100 units/mL', 'Insulin lispro (Humalog®) 100 units/mL', 'Ipratropium inhaler 20mcg', 'Irinotecan 100mg', 'Isosorbide mononitrate 30mg', 'Itraconazole 100mg', 'Lacosamide (Vimpat®) 50mg', 'Lamivudine (Epivir®) 150mg', 'Lamotrigine (Lamictal®) 25mg', 'Lansoprazole (Prevacid®) 30mg', 'Latanoprost (Xalatan®) 0.005%', 'Leflunomide (Arava®) 10mg', 'Leucovorin 15mg', 'Leuprolide (Lupron®) 7.5mg', 'Levetiracetam (Keppra®) 500mg', 'Levocetirizine 5mg', 'Levodopa / Carbidopa (Sinemet®) 100mg/25mg', 'Levothyroxine (Synthroid®) 100mcg', 'Lidocaine patch 5%', 'Linezolid (Zyvox®) 600mg', 'Lisinopril 10mg', 'Lithium carbonate 300mg', 'Loperamide 2mg', 'Loratadine 10mg', 'Lorazepam 2mg', 'Losartan 50mg', 'Lovastatin 20mg', 'Lurasidone (Latuda®) 40mg', 'Magnesium oxide 400mg', 'Meclizine 25mg', 'Meloxicam 15mg', 'Memantine (Namenda®) 10mg', 'Meropenem 1g', 'Metformin 500mg', 'Methadone 10mg', 'Methotrexate 2.5mg', 'Methylphenidate (Ritalin®) 10mg', 'Metoclopramide 10mg', 'Metolazone 2.5mg', 'Metoprolol 25mg', 'Metronidazole 500mg', 'Mirtazapine (Remeron®) 30mg', 'Misoprostol (Cytotec®) 200mcg', 'Modafinil (Provigil®) 200mg', 'Montelukast (Singulair®) 10mg', 'Morphine 10mg', 'Moxifloxacin (Avelox®) 400mg', 'Nabumetone 500mg', 'Nadolol 40mg', 'Naloxone nasal spray 2mg/2mL', 'Naltrexone (Revia®) 50mg', 'Naproxen 500mg', 'Nebivolol 5mg', 'Nifedipine ER (Procardia XL®) 30mg', 'Nitrofurantoin 100mg', 'Nitroglycerin sublingual tablets 0.4mg', 'Norepinephrine 8mg', 'Nortriptyline 25mg', 'Olanzapine (Zyprexa®) 10mg', 'Olopatadine (Pataday®) 0.2%', 'Omeprazole (Prilosec®) 20mg', 'Ondansetron (Zofran®) 8mg', 'Oxaliplatin 100mg', 'Oxcarbazepine (Trileptal®) 300mg', 'Oxybutynin 5mg', 'Oxycodone 5mg', 'Oxytocin 30 units', 'Paliperidone (Invega®) 6mg', 'Pantoprazole (Protonix®) 40mg', 'Paracetamol 500mg', 'Paroxetine (Paxil®) 20mg', 'Penicillin VK 500mg', 'Pentobarbital 100mg', 'Perindopril 4mg', 'Phenobarbital 30mg', 'Phenytoin 100mg', 'Pioglitazone (Actos®) 30mg', 'Piperacillin / Tazobactam (Zosyn®) 4g/500mg', 'Polyethylene glycol 3350', 'Potassium chloride 20mEq', 'Pramipexole (Mirapex®) 0.25mg', 'Pravastatin 20mg', 'Prednisolone 5mg', 'Prednisone 10mg', 'Pregabalin (Lyrica®) 75mg', 'Prochlorperazine 10mg', 'Promethazine 25mg', 'Propranolol 40mg', 'Quetiapine (Seroquel®) 200mg', 'Quinapril 20mg', 'Raloxifene (Evista®) 60mg', 'Ranitidine 150mg', 'Rasburicase (Elitek®) 1.5mg', 'Risedronate (Actonel®) 35mg', 'Risperidone (Risperdal®) 2mg', 'Rituximab (Rituxan®) 500mg', 'Rivaroxaban (Xarelto®) 20mg', 'Rizatriptan (Maxalt®) 10mg', 'Rosuvastatin (Crestor®) 10mg', 'Sevelamer carbonate (Renvela®) 800mg', 'Sildenafil (Viagra®) 50mg', 'Simvastatin 40mg', 'Sitagliptin (Januvia®) 100mg', 'Sodium chloride 0.9%', 'Sodium polystyrene sulfonate (Kayexalate®) 15g', 'Sotalol 80mg', 'Spironolactone 25mg', 'Sumatriptan (Imitrex®) 100mg', 'Tacrolimus (Prograf®) 1mg', 'Tadalafil (Cialis®) 20mg', 'Tamoxifen 20mg', 'Tamsulosin (Flomax®) 0.4mg', 'Tegafur / Uracil (Uftoral®) 100mg/224mg', 'Telbivudine (Tyzeka®) 600mg', 'Telmisartan 40mg', 'Temazepam 15mg', 'Tenofovir disoproxil fumarate (Viread®) 300mg', 'Terazosin 5mg', 'Terbinafine (Lamisil®) 250mg', 'Testosterone gel (Androgel®) 1%', 'Tetracycline 250mg', 'Thalidomide (Thalomid®) 100mg', 'Thioguanine 40mg', 'Thyroid (Armour) 30mg', 'Timolol eye drops 0.5%', 'Tizanidine (Zanaflex®) 4mg', 'Tobramycin inhalation solution 300mg', 'Topiramate (Topamax®) 50mg', 'Tramadol 50mg', 'Trazodone 50mg', 'Triamcinolone acetonide cream 0.1%', 'Triamterene / HCTZ (Dyazide®) 37.5mg/25mg', 'Trifluoperazine 2mg', 'Trimethoprim / Sulfamethoxazole (Bactrim®) 160mg/800mg', 'Valacyclovir (Valtrex®) 500mg', 'Valproic acid (Depakote®) 250mg', 'Vardenafil (Levitra®) 20mg', 'Venlafaxine (Effexor®) 75mg', 'Verapamil ER (Calan SR®) 240mg', 'Voriconazole (Vfend®) 200mg', 'Warfarin 5mg', 'Zidovudine (Retrovir®) 300mg', 'Ziprasidone (Geodon®) 40mg', 'Zolpidem (Ambien®) 10mg', 'Zonisamide (Zonegran®) 100mg'];

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [regn, setRegn] = useState('');
  const [problem, setProblem] = useState('');
  const [BP, setBP] = useState('');
  const [temp, setTemp] = useState('');
  const [prate, setPrate] = useState('');
  const [spo, setSpo] = useState('');
  const [inv, setInv] = useState('');
  const [adv, setAdv] = useState('');
  const [follow, setFollow] = useState('');

  const [inputValues, setInputValues] = useState({});
  const [instructions, setInstructions] = useState('');
  const [selectedElements, setSelectedElements] = useState([]);
  const handleInputChange = (event, element) => {
    const { value } = event.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [element]: value,
    }));
  };
  const handleCheckboxChange = (event, element) => {
    const checkboxName = event.target.name;
    const isChecked = event.target.checked;

    setSelectedElements((prevSelectedElements) => {
      const updatedElements = [...prevSelectedElements];
      const elementIndex = updatedElements.findIndex((el) => el.element === element);

      if (elementIndex === -1) {
        updatedElements.push({ element, [checkboxName]: isChecked });
      } else {
        updatedElements[elementIndex][checkboxName] = isChecked;
      }

      return updatedElements;
    });
  };
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const printContentRef = useRef(null);

  const handlePrint = async () => {
    setLoading(true);
    const newRegn = uuidv4();
    setRegn(newRegn);
    await new Promise(resolve => setTimeout(resolve, 0));
    
    // Prepare the dosage data for each selected element
    const updatedSelectedElements = selectedElements.map(selectedElement => ({
      ...selectedElement,
      value: inputValues[selectedElement.element] // Assign dosage value to the 'value' attribute
    }));
  
    // Prepare the data to send to the API
    const prescriptionData = {
      regn: newRegn,
      name,
      age,
      sex,
      problem,
      BP,
      temp,
      prate,
      spo,
      instructions,
      selectedElements: updatedSelectedElements,
      inv,
      adv,
      follow,
      date
    };
  
    try {
      // Make the API call to post prescriptionData
      const response = await fetch('https://shs-backend.vercel.app/postPrescriptionData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prescriptionData),
      });
  
      console.log(prescriptionData);
  
      if (!response.ok) {
        throw new Error('Failed to post prescription data');
      }
  
      console.log('data posted successfully');
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error('Error posting prescription:', error);
    }finally {
      setLoading(false);
    }
  
    const content = printContentRef.current.innerHTML;
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(`
    <html>
      <head>
        <title>Print</title>
        <style>
          body {
            font-size: 1.5em;
          }
        </style>
      </head>
      <body>
        ${content}
        <script type="text/javascript">
          window.onload = function() {
            window.print();
            window.onafterprint = function() {
              document.body.removeChild(iframe);
            };
          };
        </script>
      </body>
    </html>
  `);
  doc.close();
  };
  

  return (
    <div className="App">
      <img width="100%" alt="Doctors Logo" src={Logoimg} />
      <h2>Hello Doctor!</h2>
      <h2>Enter Patient name</h2>
      <input type="text" name="name" id="name" value={name} placeholder="Patient Name.." onChange={(e) => setName(e.target.value)} />
      <h2>Patient Age</h2>
      <input type="text" name="age" id="age" value={age} placeholder="Ex: 46" onChange={(e) => setAge(e.target.value)} />
      <h2>Sex</h2>
      <input type="text" name="sex" id="sex" value={sex} placeholder="M/F" onChange={(e) => setSex(e.target.value)} />
      {/* <h2>Registration No</h2>
      <input
        type="text"
        name="regn"
        id="regn"
        value={regn}
        placeholder="Ex: 5001"
        onChange={(e) => setRegn(e.target.value)}
        readOnly
      /> */}
      <h2>Complaints</h2>
      <input type="text" name="Prob" id="prob" value={problem} placeholder="Ex: cold,nausea.." onChange={(e) => setProblem(e.target.value)} />
      <h2>Vitals</h2>
      <h4>BP</h4>
      <input type="text" name="BP" id="BP" value={BP} placeholder="Ex: BP-120/80.." onChange={(e) => setBP(e.target.value)} />
      <h4>Temp</h4>
      <input type="text" name="Temp" id="Temp" value={temp} placeholder="Ex: 98°F" onChange={(e) => setTemp(e.target.value)} />
      <h4>Pulse Rate</h4>
      <input type="text" name="prate" id="prate" value={prate} placeholder="Ex: 72BPM" onChange={(e) => setPrate(e.target.value)} />
      <h4>SpO2</h4>
      <input type="text" name="spo" id="spo" value={spo} placeholder="Ex: 96%" onChange={(e) => setSpo(e.target.value)} />
      <h2>Diagnosis</h2>
      <input type="text" name="Instr" id="nstr" value={instructions} placeholder="Ex: Fever.." onChange={(e) => setInstructions(e.target.value)} />
      <h2>Search Medicines</h2>
      <SearchComponent elements={elements} selectedElements={selectedElements} handleCheckboxChange={handleCheckboxChange} inputValues={inputValues} handleInputChange={handleInputChange} />
      <h2>Investigation</h2>
      <input type="text" name="inv" id="inv" value={inv} placeholder="Ex: X-ray.." onChange={(e) => setInv(e.target.value)} />
      <h2>Advice Given</h2>
      <input type="text" name="adv" id="adv" value={adv} placeholder="Ex: Avoid Oily Food.." onChange={(e) => setAdv(e.target.value)} />
      <h2>Follow Up</h2>
      <input type="text" name="follow" id="follow" value={follow} placeholder="Ex: 25-06-2023" onChange={(e) => setFollow(e.target.value)} />
      <button onClick={handlePrint}>Print</button>
      {loading && <LoadingOverlay />}
      <div ref={printContentRef} id="print-content" className="print-content">
        <img width="100%" alt="Doctors Customised" src={Topimage} />
        <hr />
        <h4>Registration No  : {regn}</h4>
        <h4>Date: {date}</h4>
        <h4>Patient Name: {name} | Age: {age} | Sex: {sex}</h4>
        <hr />
        <h4>Complaints: {problem}</h4>
        <h4>Vitals - BP: {BP} | Temp: {temp}°F | Pulse Rate: {prate}BPM | Sp0₂: {spo}%</h4>
        <hr />
        <h4>Diagnosis: {instructions}</h4>
        <h4>Medicines:</h4>
        <b><p>ప-పరిగడుపున | ఉ-ఉదయం | మ-మధ్యాహ్నం | రా-రాత్రి</p></b>
        <ul>
          {selectedElements.map((selectedElement, index) => (
            <li key={index}>
              <b>{selectedElement.element} - <br /> {selectedElement.checkbox0 ? 'ప' : ' '} {selectedElement.checkbox1 ? 'ఉ' : ' '} {selectedElement.checkbox2 ? 'మ' : ' '} {selectedElement.checkbox3 ? 'రా' : ' '}  {inputValues[selectedElement.element] && `|  ${inputValues[selectedElement.element]} రోజులు`}</b><br/> <br/>
            </li>
          ))}
        </ul>
        <hr />
        <h4>Investigations: {inv}</h4>
        <h4>Advice Given: {adv}</h4>
        <h4>Follow Up: {follow}</h4>
        <hr />
        <h5>Signature of the doctor : </h5>
        <img width="150px" alt="Doctors Logo" src={Sign} />
      </div>
    </div>
  );
}

export default App;
