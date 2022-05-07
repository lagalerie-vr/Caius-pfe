import { useEffect, useState } from "react";
import Stepper from "./FormComponents/Stepper";
import StepperControl from "./FormComponents/StepperControl";
import { UseContextProvider } from "../../../contexts/StepperContext";

import Form1 from "./Steps/1";
import Form2 from "./Steps/2";
import Form3 from "./Steps/3";
import Form4 from "./Steps/4"
import Form5 from "./Steps/5"
import Form6 from "./Steps/6"
import Form7 from "./Steps/7"
import Final from "./Steps/Final";

function Form() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isValid, setIsValid] = useState(0);
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")




    const steps = [
        "Form1",
        "Form2",
        "Form3",
        "Form4",
        "Form5",
        "Form6",
        "Form7",
        "Final"
    ];


    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <Form1 setIsValid={setIsValid} step={1} setErrorMessage={setErrorMessage} />;
            case 2:
                return <Form2 setIsValid={setIsValid} step={2} setErrorMessage={setErrorMessage} />;
            case 3:
                return <Form3 setIsValid={setIsValid} step={3} setErrorMessage={setErrorMessage} />;
            case 4:
                return <Form4 setIsValid={setIsValid} step={4} setErrorMessage={setErrorMessage} />;
            case 5:
                return <Form5 setIsValid={setIsValid} step={5} setErrorMessage={setErrorMessage} />;
            case 6:
                return <Form6 setIsValid={setIsValid} step={6} setErrorMessage={setErrorMessage} />;
            case 7:
                return <Form7 setIsValid={setIsValid} step={7} setErrorMessage={setErrorMessage} />;
            case 8:
                return <Final setIsValid={setIsValid} step={8} setErrorMessage={setErrorMessage} />;
        }
    };


    const handleClick = (direction) => {
        setError(false)
        let newStep = currentStep;

        if (currentStep === isValid && direction === "next") { newStep++ }
        if (currentStep !== isValid && direction === "next") {
            setError(true)
        }
        if (direction !== "next") { newStep--; }
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    useEffect(() => {
        console.log(isValid)
    }, [isValid])

    return (
        <div >
            {/* Stepper */}
            <div className="horizontal container">

                <Stepper steps={steps} currentStep={currentStep} />

                <div className="my-10 p-10 ">
                    <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
                    {(error && errorMessage) &&
                        <div className=" bg-red-50 p-4">
                            <div>
                                <p className="text-sm text-red-700">
                                    {errorMessage}
                                </p>
                            </div>
                        </div>
                    }

                </div>
            </div>



            {/* navigation button */}
            {currentStep !== steps.length && (
                <StepperControl
                    handleClick={handleClick}
                    currentStep={currentStep}
                />
            )}

        </div>
    );
}

export default Form;



