import { useField } from "formik";

// select input to be used to select payment term in all forms
const FormSelectField = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
           <label htmlFor={props.id || props.name}>{label}</label>
           <input className="paymentSelect" {...field} {...props}/>
           {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
        </>
    );
}

export default FormSelectField;