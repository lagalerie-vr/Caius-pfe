import Page from '../../Layouts/LayoutPage'
import Form from '../../Components/Forms/StatusForm/Form'

function CreationForm() {
    return (
        <Page
            title="Création de statuts"
            content={<Form />}
        />
    )
}

export default CreationForm

