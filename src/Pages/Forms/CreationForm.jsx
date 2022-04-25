import Page from '../../Layouts/LayoutPage'
import Form from '../../Components/Forms/CreationForm/Form'

function CreationForm() {
    return (
        <Page
            title="Création d'entreprise"
            content={<Form />}
        />
    )
}

export default CreationForm

