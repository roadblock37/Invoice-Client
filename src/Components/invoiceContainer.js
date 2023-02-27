import Invoice from "./invoice";
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllInvoices} from '../Features/AllInvoices/allInvoiceSlice';

const InvoiceContainer = () => {
    const {isLoading, invoices, totalInvoices} = useSelector((store) => store.allInvoices);
    const dispatch = useDispatch();

    // fetch all invoices from server on page render
    // fetch data again if a filter is selected
    useEffect(() => {
        dispatch(getAllInvoices());
        console.log(invoices);
        
    }, []);

    // TODO create Loading component

    // if (isLoading) {
    //     return <Loading/>;
    // }

    // TODO create empty invoice component
    // if (invoices.length === 0) {
    //     return (
    //         <h1>NO invoices to display...</h1>
    //     );
    // }

    
    return (
        <div>

        <h5> {totalInvoices} invoice found</h5>
        <section className="invoiceContainer">
            {/* {invoices.map((item) => {
                return <Invoice key={item._id} {...item}/>
            })} */}
            <Invoice/>
        </section>
        </div>
    );
}

export default InvoiceContainer;