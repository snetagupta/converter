import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


const  Calci = ()=>{
    const [weightObj, setWeightObj] = React.useState({
      kg: 0,
      lbs: 0
    });

    const convertKgToLbs = (Kg)=>{
      const lbs = Kg/0.45359237;
      setWeightObj({
        kg: Kg,
        lbs: lbs
      });
    }

   const convertLbsToKg = (lbs)=>{
    const kg = lbs*2.20462262;
    setWeightObj({
      kg: kg,
      lbs: lbs
    })
   }



  return(
    <Card className='pos-center' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Weight Converter</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Convert Kg to Lbs</Card.Subtitle>
        <hr />
        <Card.Text>
         <WeightInput type={2} converter={convertKgToLbs} weight={weightObj.kg} />  
         <WeightInput type={1} converter={convertLbsToKg} weight={weightObj.lbs} />
        </Card.Text>
      </Card.Body>
    </Card>
  ); 
}

const WeightInput = ({converter,weight,type})=>{
  return(
    <Form.Group className="mb-3" >
        <Form.Label>Weight({type === 1?'LBS':'KG'})</Form.Label>
        <Form.Control
        onChange={(e)=>converter(e.target.value)}
         type="number" value={weight} 
         placeholder={`Enter weight in ${type === 1?'lbs':'kg'}`} />
      </Form.Group>
  );
}

  
  

  export default Calci;