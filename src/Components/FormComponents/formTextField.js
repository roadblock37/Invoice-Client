import { useField } from "formik";

// text input component for use in all forms
const FormTextField = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props}/>
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>): null}
        </>
    );
}

export default FormTextField;