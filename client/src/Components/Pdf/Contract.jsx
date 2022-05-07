import { useState, useRef, useEffect } from "react"
import useGet from '../../data/Functions/useGet'


import ReactToPrint from "react-to-print"

function App({ selected }) {

  const user = useGet(`/users/user/${selected.user}`)

  useEffect(() => {
    setUserName(`${user.nom} ${user.nom}`);
  }, [user])


  useEffect(() => {
    if (selected) {
      setDateStart(selected.createdAt)
      setDateContract(selected.createdAt)
      setStartupName(selected.nom);
      setRef(selected._id)
      setCin(selected.cin);
      setFiscale(selected.fisc)

      setDuree(" 6 mois");
      setPrix("71");
      setDateEnd("22-10-2022")
    }
  }, [selected])

  const [startupName, setStartupName] = useState("")
  const [userName, setUserName] = useState("")
  const [cin, setCin] = useState("")
  const [duree, setDuree] = useState("")
  const [dateStart, setDateStart] = useState("")
  const [dateEnd, setDateEnd] = useState("")
  const [ref, setRef] = useState("")
  const [prix, setPrix] = useState("")
  const [fiscale, setFiscale] = useState("")
  const [dateContract, setDateContract] = useState("")

  const componentRef = useRef()

  const handlePrint = () => {
    window.print()
  }

  return (
    <>

      {/* Invoice Preview */}
      <div className="invoice__preview bg-white p-5 rounded">
        <ReactToPrint
          trigger={() => (
            <button className="bg-indigo-700 ml-5 text-white font-bold py-2 px-8 rounded hover:bg-indigo-200 hover:text-indigo-700 transition-all duration-300">
              Imprimer / Télécharger
            </button>
          )}
          content={() => componentRef.current}
        />
        <div ref={componentRef} className="p-5">
          <p style={{ textAlign: "center" }}><strong>Contrat de domiciliation</strong></p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>

          <p style={{ textAlign: "right" }}><strong>REF {ref}</strong></p>
          <p>&nbsp;</p>
          <p><strong>Entre les soussign&eacute;s </strong></p>
          <p>MIND UP, Matricule Fiscal N&deg;1621010P/A/C/000, sise &agrave; 8 avenue de l&rsquo;universit&eacute;, El Manar1 &ndash; 2092 Tunis Tunisie, repr&eacute;sent&eacute;e par sa g&eacute;rante YACOUBI Basma.</p>
          <p>Ci-apr&egrave;s d&eacute;nomm&eacute;e le Domiciliataire d&rsquo;une part,</p>
          <p>Et la soci&eacute;t&eacute; &laquo; {startupName} &raquo; en cours de constitution repr&eacute;sent&eacute;e par {userName} titulaire de la CIN n&deg;{cin}</p>
          <p>Ci-apr&egrave;s d&eacute;nomm&eacute; la soci&eacute;t&eacute; domicili&eacute;e d&rsquo;autre part, il a &eacute;t&eacute; approuv&eacute; les conditions suivantes :</p>
          <p>&nbsp;</p>
          <p><strong>Article 1- Objet</strong></p>
          <p><strong>&nbsp;</strong></p>
          <p>Le domiciliataire donne une domiciliation juridique, domiciliation fiscale et une domiciliation du si&egrave;ge social &agrave; la soci&eacute;t&eacute; domicili&eacute;e, repr&eacute;sent&eacute;e par {userName} qui accepte d&rsquo;utiliser l&rsquo;adresse du domiciliataire &agrave; 8 avenue de l&rsquo;universit&eacute;, El Manar1 &ndash; 2092 Tunis Tunisie et sa signature aux bas des pr&eacute;sents vaut acceptation sans aucune r&eacute;serve. La domiciliation permet &agrave; la soci&eacute;t&eacute; domicili&eacute;e d&rsquo;obtenir une patente, d&rsquo;utiliser l&rsquo;adresse de domiciliation sur ses factures, ses correspondances et la communiquer &agrave; sa client&egrave;le et d&rsquo;obtenir tous les papiers l&eacute;gaux utiles &agrave; la soci&eacute;t&eacute;. Pour les fins de ce contrat, les conditions g&eacute;n&eacute;rales annex&eacute;es font partie int&eacute;grante du pr&eacute;sent contrat.</p>
          <p>&nbsp;</p>
          <p><strong>Article 2- Dur&eacute;e </strong></p>
          <p><strong>&nbsp;</strong></p>
          <p>Le pr&eacute;sent contrat de domiciliation est consenti et accept&eacute; pour une dur&eacute;e de {duree} entiers et cons&eacute;cutifs qui commenceront &agrave; courir le {dateStart} pour finir le {dateEnd}.Le pr&eacute;sent contrat est conclu pour une dur&eacute;e d&eacute;termin&eacute;e de {duree}.</p>
          <p>En cas de r&eacute;siliation anticip&eacute;e du pr&eacute;sent contrat, le Domiciliataire se r&eacute;serve le droit d&rsquo;informer l&rsquo;administration de ladite r&eacute;siliation. Le domicili&eacute; est tenu de fournir au domiciliataire la nouvelle adresse en cas de changement de si&egrave;ge social ainsi qu&rsquo;en fin de contrat pour le transmettre &agrave; l&rsquo;Administration fiscale, la caisse nationale de s&eacute;curit&eacute; sociale et toute autre administration et autorit&eacute; publique qui la demande.</p>
          <p>&nbsp;</p>
          <p><strong>Article 3- Frais de domiciliation</strong></p>
          <p><strong>&nbsp;</strong></p>
          <p>La pr&eacute;sente domiciliation juridique, domiciliation fiscale est consentie et accept&eacute;e moyennant une redevance semestrielle de {prix} TTC.</p>
          <p>Les frais de la domiciliation {prix}) sont int&eacute;gralement payables &agrave; la date de signature du pr&eacute;sent contrat.</p>
          <p>Toute demande de renouvellement du nouveau contrat doit faire l'objet d'une demande avant un mois de sa date d'expiration. Dans le cas contraire, le contrat est automatiquement r&eacute;sili&eacute;.</p>
          <p>Pour tout renouvellement annuel de ce contrat, les frais de domiciliation sont major&eacute;s de 5% et le montant annuel des frais de domiciliation est payable en totalit&eacute; &agrave; la date de renouvellement.</p>
          <p>Aucune retenue &agrave; la source ne peut &ecirc;tre op&eacute;r&eacute;e par la soci&eacute;t&eacute; domicili&eacute;e sans la remise du certificat de retenue &agrave; la source correspondant.&nbsp; L&rsquo;utilisation par la soci&eacute;t&eacute; domicili&eacute;e de tout autre service associ&eacute; fourni par le domiciliataire tel que d&eacute;finis par l&rsquo;article 1er des conditions g&eacute;n&eacute;rales fera l&rsquo;objet d&rsquo;une facturation s&eacute;par&eacute;e et d&eacute;taill&eacute;e selon les tarifs qui sont communiqu&eacute;s &agrave; la soci&eacute;t&eacute; domicili&eacute;e lors de la signature du pr&eacute;sent contrat. Ils sont payables sur pr&eacute;sentation de facture.</p>
          <p>&nbsp;</p>
          <p><strong>Article 4- R&eacute;siliation du contrat</strong></p>
          <p>&nbsp;</p>
          <p>La dur&eacute;e du contrat de domiciliation est de {duree} int&eacute;grale, renouvelable sur accord express des deux parties.&nbsp;&nbsp;</p>
          <p><strong>&nbsp;</strong></p>
          <p><strong>Article 5- Procuration </strong></p>
          <p><strong>&nbsp;</strong></p>
          <p>La soci&eacute;t&eacute; domicili&eacute;e donne par la pr&eacute;sente procuration sp&eacute;ciale au domiciliataire afin de r&eacute;ceptionner pour son compte, tout le courrier simple et recommand&eacute; ainsi que les proc&egrave;s-verbaux des huissiers notaires provenant de l&rsquo;administration fiscale, la caisse nationale de s&eacute;curit&eacute; social, et tout autre organisme et entreprise. Et d&rsquo;en donner d&eacute;charge.</p>
          <p>&nbsp;</p>
          <p><strong>Article 6- imp&ocirc;ts, frais et honoraire</strong></p>
          <p><strong>&nbsp;</strong></p>
          <p>Tous frais, taxes, droit d&rsquo;enregistrement et honoraire occasionn&eacute;s par le pr&eacute;sent contrat sont la charge enti&egrave;re et exclusive de la soci&eacute;t&eacute; domicili&eacute;e.</p>
          <p>&nbsp;</p>
          <p>Fait en autant d&rsquo;exemplaires que de besoin.</p>
          <p>&nbsp;</p>
          <p><strong>Conditions g&eacute;n&eacute;rales</strong></p>
          <p>&nbsp;&nbsp;</p>
          <p>Article 1&nbsp;: D&eacute;finition des services associ&eacute;s</p>
          <p>&nbsp;</p>
          <p>En plus de la domiciliation fiscale. La soci&eacute;t&eacute; domicili&eacute;e peut b&eacute;n&eacute;ficier de services associ&eacute;s sp&eacute;cifiques pendant les horaires de travail du domiciliataire. Qui font l&rsquo;objet d&rsquo;un devis et d&rsquo;une facturation s&eacute;par&eacute;e et d&eacute;taill&eacute;e selon les tarifs qui lui sont communiqu&eacute;s lors de la signature du pr&eacute;sent contrat. Ils sont payables &agrave; la r&eacute;ception de la facture correspondent. Les services associ&eacute;s sont &agrave; titre indicatifs, les suivants&nbsp;: - Utilisation d&rsquo;une salle permettant les r&eacute;unions en fonction des disponibilit&eacute;s des locaux et sur r&eacute;servation. &ndash; Utilisation d&rsquo;un bureau et ce, en fonction des disponibilit&eacute;s des locaux et sur r&eacute;servation confirm&eacute;e par le domiciliataire.</p>
          <p>&nbsp;</p>
          <p>Article 2&nbsp;: Obligations de la soci&eacute;t&eacute; domicili&eacute;e</p>
          <p>&nbsp;</p>
          <p>2.1 Elle devra acquitter ses contributions, imp&ocirc;ts, charges et taxes de toute nature que le domiciliataire ne puisse jamais &ecirc;tre inqui&eacute;t&eacute; &agrave; cet &eacute;gard.</p>
          <p>2.2&nbsp;&nbsp; Elle s&rsquo;engage &agrave; ne pas utiliser les services du domiciliataire pour des activit&eacute;s immorales, ill&eacute;gales, diffamatoires ou portant atteintes aux bonnes meurs. Dans le cas contraire, la domiciliation se r&eacute;serve le droit de r&eacute;silier le pr&eacute;sent contrat et ce sans pr&eacute;judice de r&eacute;paration des &eacute;ventuels dommages qu&rsquo;elle aurait subis.</p>
          <p>2.3 Elle s&rsquo;engage &agrave; notifier au domiciliataire par lettre recommand&eacute;e avec accus&eacute; de r&eacute;ception et ce, dans le d&eacute;lai d&rsquo;un mois &agrave; compter de la date de leur survenance les &eacute;v&eacute;nements suivants&nbsp;: sa mise en &eacute;tat de redressement ou liquidation amiable ou judiciaire. Sa fusion ou dissolution. Le transfert &eacute;ventuel de son si&egrave;ge social, toute modification de sa d&eacute;nomination ou son objet et tout changement dans son administration ou sa direction.</p>
          <p>&nbsp;</p>
          <p>Article 3&nbsp;: Exclusion de responsabilit&eacute;</p>
          <p>&nbsp;</p>
          <p>3.1 La soci&eacute;t&eacute; domicili&eacute;e d&eacute;gage d&eacute;finitivement le domiciliataire de toute responsabilit&eacute; directe ou indirecte, incluant sans restriction les pertes financi&egrave;res d&rsquo;une chance de revenu, de profit, de march&eacute;. Ect. R&eacute;sultant de l&rsquo;inex&eacute;cution ou de l&rsquo;inex&eacute;cution de ce contrat et ce, quelles que soient leurs origines ou/et le fondement de l&rsquo;action.</p>
          <p>3.2 La soci&eacute;t&eacute; domicili&eacute;e &eacute;tant cens&eacute;e ne laisser aucun objet ou bien lui revenant. Il ne pourra en aucun cas tenir le domiciliataire pour responsable des vols qui pourraient &ecirc;tre comme dans les lieux dont elle a l&rsquo;usage. Elle ne pourra r&eacute;clamer aucune indemnit&eacute; ni dommages et int&eacute;r&ecirc;ts de ce chef.&nbsp;&nbsp;</p>
          <p>&nbsp;</p>
          <p>Article 4&nbsp;: Droit de propri&eacute;t&eacute; du domiciliataire sur les biens meubles</p>
          <p>&nbsp;</p>
          <p>La soci&eacute;t&eacute; domicili&eacute;e reconnait que la propri&eacute;t&eacute; de tous les meubles se trouvant dans les locaux lou&eacute;s revient de plein droit au domiciliataire. La soci&eacute;t&eacute; domicili&eacute;e doit avertir ses &eacute;ventuels cr&eacute;anciers que les biens meubles se trouvant dans les locaux du domiciliataire ne sont pas sa propri&eacute;t&eacute;, mais celle du domiciliataire. Au cas o&ugrave; les biens mobiliers meublant le local du domiciliataire viendraient &agrave; faire l&rsquo;objet d&rsquo;une saisie quelconque conservatoire ou ex&eacute;cutoire, d&rsquo;une r&eacute;quisition par toute autorit&eacute; et ce par suite de sommes que la soci&eacute;t&eacute; domicili&eacute;e s&rsquo;est rendue d&eacute;bitrice, cette derni&egrave;re est tenue de d&eacute;clarer &agrave; l&rsquo;agent charg&eacute; d&rsquo;ex&eacute;cuter que les biens meubles en question sont la propri&eacute;t&eacute; du domiciliataire et d&rsquo;avertir sans d&eacute;lai ce dernier. En outre, la soci&eacute;t&eacute; domicili&eacute;e doit prendre &agrave; ses frais toutes les mesures pour faire connaitre ledit droit de propri&eacute;t&eacute; du domiciliataire et faire passer l&rsquo;atteinte qui lui a &eacute;t&eacute; port&eacute;e.</p>
          <p>&nbsp;</p>
          <p>Article 5&nbsp;: Comp&eacute;tence juridictionnelle</p>
          <p>&nbsp;</p>
          <p>Toutes contestations qui naitraient &agrave; l&rsquo;occasion de l&rsquo;interpr&eacute;tation ou/et l&rsquo;ex&eacute;cution du pr&eacute;sent contrat sont de la comp&eacute;tence des tribunaux de Tunis.</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>

          <p style={{ textAlign: "center" }}><strong>ATTESTATION DE DOMICILIATION</strong></p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>Je soussign&eacute; Basma Yacoubi <strong>g&eacute;rante de la soci&eacute;t&eacute; </strong>Yacoubi Basma MIND UP, immatricul&eacute; sous l&rsquo;Identifiant fiscale1621010P/A/C/000 donne par pr&eacute;sente domiciliation &agrave; la soci&eacute;t&eacute; &laquo; {startupName} &nbsp;&raquo; immatricul&eacute; sous l&rsquo;Identifiant fiscale {fiscale} repr&eacute;sent&eacute;e par {userName} titulaire de CIN n&deg;{cin}, au local sis 8 avenue de l&rsquo;universit&eacute; el Manar 1-2092&nbsp;</p>
          <p>&nbsp;</p>
          <p>Nous nous engageons &agrave; cet effet :</p>
          <p>&nbsp;</p>
          <ul>
            <li>A informer l&rsquo;administration fiscale et sociale de la fin du contrat de domiciliation ou d&rsquo;un &eacute;ventuel changement de si&egrave;ge d&egrave;s la manifestation &agrave; ce propos produite par La Personne physique en cours de constitution</li>
          </ul>
          <p>&nbsp;</p>
          <ul>
            <li>De recevoir tout document provenant de l&rsquo;administration fiscale ou sociale concernant La Personne physique en cours de constitution.</li>
          </ul>
          <p>&nbsp;</p>
          <ul>
            <li>De faciliter la t&acirc;che aux agents de l&rsquo;administration fiscale et sociale en cas de contr&ocirc;le des locaux abritant l&rsquo;activit&eacute; de La Personne physique en cours de constitution.</li>
          </ul>
          <p>&nbsp;</p>
          <p>La pr&eacute;sente domiciliation juridique, domiciliation fiscale est consentie et accept&eacute;e moyennant une redevance semestrielle de {prix} TTC.</p>
          <p>&nbsp;</p>
          <p>La pr&eacute;sente domiciliation est conclue pour une dur&eacute;e d&eacute;termin&eacute;e de {duree}, non renouvelable qui commenceront &agrave; courir le {dateStart} pour finir le {dateEnd}.</p>
          <p>&nbsp;</p>
          <p>Attestation d&eacute;livr&eacute;e pour faire valoir de ce que de droit.</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>Fait &agrave; Tunis, le {dateContract}</p>
          <p>&nbsp;</p>
          <p><strong>&nbsp;</strong></p>
          <p><strong>Signature et cachet</strong></p>
        </div>
      </div>
    </>
  )
}

export default App
