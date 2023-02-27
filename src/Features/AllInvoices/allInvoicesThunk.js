import customFetch from '../../Utils/axios'

export const getAllInvoicesThunk = async (_, thunkAPI) => {
    const {filterState} = thunkAPI.getState().allInvoices;

    let url = `/invoices?filter=${filterState}`;
    try {
        const resp = await customFetch.get(url);
        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
}