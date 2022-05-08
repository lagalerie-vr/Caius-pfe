

import { useState, useRef, useEffect } from "react"
import ReactToPrint from "react-to-print"

function App({ selected }) {

    useEffect(() => {
        if (selected) {
            setNomSociete(selected.nomSociete)
            setCapital(selected.capital)
            setSiege(selected.siege)
            setObjet(selected.objet)
            setDenomination(selected.denomination)
            setActions(selected.actions)
            setPartie(selected.partie)
            setPlafond(selected.plafond)
            setGaranties(selected.garanties)
            setDate(selected.createdAt)
        }
    }, [selected])

    const [nomSociete, setNomSociete] = useState("")
    const [capital, setCapital] = useState("")
    const [siege, setSiege] = useState("")
    const [objet, setObjet] = useState("")
    const [denomination, setDenomination] = useState("")
    const [actions, setActions] = useState("")
    const [partie, setPartie] = useState("")
    const [plafond, setPlafond] = useState("")
    const [garanties, setGaranties] = useState("")
    const [date, setDate] = useState("")

    const componentRef = useRef()

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
                    <div>

                        <p style={{ textAlign: "center" }}><strong><em><u>SOCIETE&nbsp;&nbsp;{nomSociete}</u></em></strong></p>
                        <p style={{ textAlign: "center" }}><strong><em>Soci&eacute;t&eacute; Anonyme au capital de {capital} Dinars</em></strong></p>
                        <p style={{ textAlign: "center" }}><strong><em>&nbsp;</em></strong></p>
                        <p style={{ textAlign: "center" }}><strong><em>Si&egrave;ge Social&nbsp;: {siege}</em></strong></p>
                        <p style={{ textAlign: "center" }}><strong><em>&nbsp;</em></strong><strong><em>&nbsp;</em></strong></p>
                        <p style={{ textAlign: "center" }}><strong><em><u>STATUTS</u></em></strong></p>
                        <p style={{ textAlign: "center" }}><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>&nbsp;</strong></p>
                        <p style={{ textAlign: "center" }}><strong>Titre Premier</strong></p>
                        <h2 style={{ textAlign: "center" }}><strong>Formation - Objet - D&eacute;nomination - Si&egrave;ge - Dur&eacute;e</strong></h2>
                        <p><u>&nbsp;</u></p>
                        <h3><strong>Article 1 : Formation de la Soci&eacute;t&eacute;</strong></h3>
                        <p>&nbsp;</p>
                        <p>Il est form&eacute; par les pr&eacute;sentes, entre les propri&eacute;taires des actions ci-apr&egrave;s cr&eacute;&eacute;es et de celles qui pourront l'&ecirc;tre ult&eacute;rieurement, une Soci&eacute;t&eacute; Anonyme qui sera r&eacute;gie par la l&eacute;gislation en vigueur en Tunisie et notamment par le Code des Soci&eacute;t&eacute;s Commerciales du 03 novembre 2000 tel qu&rsquo;il a &eacute;t&eacute; modifi&eacute; par les textes subs&eacute;quents et par les pr&eacute;sents statuts.</p>
                        <h4><strong>&nbsp;</strong></h4>
                        <h4><strong>Article 2: Objet </strong></h4>
                        <p><u>&nbsp;</u></p>
                        <p>La Soci&eacute;t&eacute; a pour objet :</p>
                        <p>&nbsp;</p>
                        <ol>
                            <li>L&rsquo;exploitation de {objet}</li>
                            <li>La prise de participation ou d&rsquo;int&eacute;r&ecirc;t dans toutes soci&eacute;t&eacute;s ou op&eacute;rations quelconques par voie de fusion, apports, souscription, achat de titres et droits sociaux, constitution de soci&eacute;t&eacute;s nouvelles ou de toute autre mani&egrave;re,</li>
                            <li>Et g&eacute;n&eacute;ralement toutes op&eacute;rations commerciales, financi&egrave;res, industrielles, mobili&egrave;res ou immobili&egrave;res se rattachant directement ou indirectement aux objets ci-dessus ou &agrave; tout autre objet similaire ou connexe.</li>
                        </ol>
                        <p><strong><u>&nbsp;</u></strong></p>
                        <p><strong><u>Article 3&nbsp;: D&eacute;nomination</u></strong></p>
                        <p><u>&nbsp;</u></p>
                        <p>La Soci&eacute;t&eacute; prend la d&eacute;nomination de Soci&eacute;t&eacute; {denomination}. Dans tous les actes, factures, annonces, publications et autres documents &eacute;manant de la Soci&eacute;t&eacute;, cette d&eacute;nomination devra &ecirc;tre pr&eacute;c&eacute;d&eacute;e ou suivie des mots &laquo;&nbsp;Soci&eacute;t&eacute; Anonyme&nbsp;&raquo; et de l&rsquo;&eacute;nonciation du montant du capital social.</p>
                        <p><u>&nbsp;</u></p>
                        <p><strong><u>Article 4 : Si&egrave;ge Social</u></strong></p>
                        <h5><u>&nbsp;</u></h5>
                        <p>Le si&egrave;ge social est fix&eacute; &agrave; Tunis</p>
                        <p>&nbsp;</p>
                        <p>Il peut &ecirc;tre transf&eacute;r&eacute; en tout autre endroit de la Tunisie par d&eacute;cision de l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale Extraordinaire.</p>
                        <p>&nbsp;</p>
                        <p>La soci&eacute;t&eacute; pourra en outre &eacute;tablir des succursales, bureaux agences, filiales ou repr&eacute;sentations partout o&ugrave; le Conseil d&rsquo;Administration le jugera convenable.</p>
                        <p><strong><u>&nbsp;</u></strong></p>
                        <p><strong><u>Article 5 : Dur&eacute;e</u></strong></p>
                        <p>&nbsp;</p>
                        <p>La dur&eacute;e de la soci&eacute;t&eacute; est fix&eacute;e &agrave; quatre vingt dix neuf (99) ann&eacute;es &agrave; compter de sa constitution d&eacute;finitive, sauf les cas de dissolution anticip&eacute;e ou de prorogation pr&eacute;vus aux pr&eacute;sents statuts.</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>Titre deux</p>
                        <p><strong><u>&nbsp;</u></strong></p>
                        <p><strong><u>&nbsp;Apports - Capital Social</u></strong></p>
                        <h3><strong>Article 6 : Capital social</strong></h3>
                        <p>&nbsp;</p>
                        <p>Le capital social est fix&eacute; &agrave; la somme de&nbsp;{capital} Dinars divis&eacute; en {actions}&nbsp; actions nominatives de {partie} Dinars chacune enti&egrave;rement souscrites et int&eacute;gralement lib&eacute;r&eacute;es.</p>
                        <p>&nbsp;</p>
                        <h2><strong>&nbsp;</strong></h2>
                        <h2><strong>Titre trois</strong></h2>
                        <p><strong>&nbsp;</strong></p>
                        <h2><strong>Augmentation - R&eacute;duction du capital - Actions</strong></h2>
                        <p><strong><u>&nbsp;</u></strong></p>
                        <h4><strong>Article 7&nbsp;: Augmentation et r&eacute;duction du capital</strong></h4>
                        <p>&nbsp;</p>
                        <p>L&rsquo;augmentation du capital social pourra &ecirc;tre r&eacute;alis&eacute;e par l&rsquo;&eacute;mission de nouvelles actions nominatives ou par l&rsquo;augmentation de la valeur nominale des actions existantes.</p>
                        <p>Le capital social peut &ecirc;tre augment&eacute; en une ou plusieurs fois soit par la cr&eacute;ation d'actions nouvelles en repr&eacute;sentation d'apports en nature et en esp&egrave;ces, soit par incorporation des r&eacute;serves disponibles, des b&eacute;n&eacute;fices ou des primes d&rsquo;&eacute;mission.</p>
                        <p>&nbsp;</p>
                        <p>L&rsquo;augmentation de capital par majoration de la valeur nominale des actions est d&eacute;cid&eacute;e &agrave; l&rsquo;unanimit&eacute; des actionnaires, sauf si l&rsquo;augmentation est r&eacute;alis&eacute;e par incorporation des r&eacute;serves, des b&eacute;n&eacute;fices ou des primes d&rsquo;&eacute;mission.</p>
                        <p>&nbsp;</p>
                        <p>Les augmentations de capital sont d&eacute;cid&eacute;es ou autoris&eacute;es par l'Assembl&eacute;e G&eacute;n&eacute;rale Extraordinaire des actionnaires, qui fixe les conditions des &eacute;missions nouvelles et donne tous pouvoirs au Conseil d&rsquo;Administration &agrave; l'effet de les r&eacute;aliser dans un d&eacute;lai qui ne peut &ecirc;tre sup&eacute;rieur &agrave; Cinq ann&eacute;es.</p>
                        <p>&nbsp;</p>
                        <p>Le capital social doit &ecirc;tre int&eacute;gralement lib&eacute;r&eacute; avant toute &eacute;mission de nouvelles actions &agrave; peine de nullit&eacute;.</p>
                        <p>&nbsp;</p>
                        <p>L&rsquo;assembl&eacute;e g&eacute;n&eacute;rale extraordinaire d&eacute;cide la r&eacute;duction du capital selon les conditions et modalit&eacute;s requises pour la modification des statuts, suite &agrave; un rapport du Commissaire aux comptes.et conform&eacute;ment aux dispositions des articles 307 et suivants du code des soci&eacute;t&eacute;s commerciales.</p>
                        <p>&nbsp;</p>
                        <p>La d&eacute;cision de r&eacute;duction du capital devra &ecirc;tre publi&eacute;e au Journal Officiel de la R&eacute;publique Tunisienne et dans deux quotidiens dont l&rsquo;un en langue arabe dans un d&eacute;lai de trente jours &agrave; partir de sa date.</p>
                        <p>&nbsp;</p>
                        <h4><strong>&nbsp;Article 8 : Droit pr&eacute;f&eacute;rentiel de souscription&nbsp;:</strong></h4>
                        <p>&nbsp;</p>
                        <p>Les actionnaires ont, proportionnellement au montant de leurs actions, un droit de pr&eacute;f&eacute;rence &agrave; la souscription des actions de num&eacute;raire &eacute;mises pour r&eacute;aliser une augmentation de capital.</p>
                        <p>Si certains actionnaires n&rsquo;ont pas souscrit les actions pour lesquelles ils disposent d&rsquo;un droit de pr&eacute;f&eacute;rence, les actions ainsi non-souscrites seront attribu&eacute;es aux autres actionnaires proportionnellement &agrave; leurs demandes ou &agrave; d&eacute;faut selon leurs quote-part.</p>
                        <p>Si les souscriptions r&eacute;alis&eacute;es n&rsquo;atteignent pas la totalit&eacute; de l&rsquo;augmentation de capital, le montant de l&rsquo;augmentation de capital peut &ecirc;tre limit&eacute; au montant des souscriptions, sous la double condition que celui-ci atteigne les trois quarts au moins de l&rsquo;augmentation d&eacute;cid&eacute;e et que cette facult&eacute; ait &eacute;t&eacute; pr&eacute;vue express&eacute;ment par l&rsquo;Assembl&eacute;e g&eacute;n&eacute;rale Extraordinaire qui a d&eacute;cid&eacute; ladite augmentation.</p>
                        <p>&nbsp;</p>
                        <p>L&rsquo;Assembl&eacute;e g&eacute;n&eacute;rale Extraordinaire qui d&eacute;cide ou autorise une augmentation du capital peut supprimer le droit pr&eacute;f&eacute;rentiel de souscription pour la totalit&eacute; de l&rsquo;augmentation du capital ou pour une ou plusieurs parties de cette augmentation.</p>
                        <p>&nbsp;</p>
                        <h3><strong>Article 9 : &ndash; Comptes d&rsquo;actionnaires- Registres des valeurs mobili&egrave;res et des dirigeants&nbsp;:</strong></h3>
                        <p><strong>&nbsp;</strong></p>
                        <p><strong>9-1&nbsp;: Comptes d&rsquo;Actionnaires&nbsp;:</strong></p>
                        <p><strong>&nbsp;</strong></p>
                        <p>Les actions ou obligations &eacute;mises par la soci&eacute;t&eacute; doivent donner lieu &agrave; une inscription &agrave; un compte ouvert par la soci&eacute;t&eacute; &agrave; son si&egrave;ge social au nom de chaque titulaire.</p>
                        <p>&nbsp;</p>
                        <p>Ledit compte doit indiquer le nom et le domicile du titulaire ainsi que le nombre des titres d&eacute;tenus.</p>
                        <p>&nbsp;</p>
                        <p>A la demande de l&rsquo;actionnaire ou de l&rsquo;obligataire une attestation d&rsquo;inscription en compte lui sera d&eacute;livr&eacute;e.</p>
                        <p>&nbsp;</p>
                        <p>Tout titulaire peut consulter les comptes sus-indiqu&eacute;s.</p>
                        <p><strong>&nbsp;</strong></p>
                        <p><strong>9-2&nbsp;: Registres&nbsp;:</strong></p>
                        <p><strong>&nbsp;</strong></p>
                        <p>La soci&eacute;t&eacute; doit tenir&nbsp;;</p>
                        <p>-Un registre mentionnant les noms, pr&eacute;noms et adresses de chacun des dirigeants et des membres du Conseil d&rsquo;Administration,</p>
                        <p>-Un registre des valeurs mobili&egrave;res mentionnant notamment les indications relatives aux titres objet dudit registre, l&rsquo;identit&eacute; de leurs propri&eacute;taires respectifs, les op&eacute;rations dont ils font l&rsquo;objet ainsi que les charges et droits grevant les titres en question.</p>
                        <p>&nbsp;</p>
                        <p>Les actionnaires ont le droit d&rsquo;obtenir des extraits desdits registres pendant les horaires habituels de travail &agrave; la soci&eacute;t&eacute;.</p>
                        <h4><strong>&nbsp;</strong></h4>
                        <h4><strong>Article 10&nbsp;: Lib&eacute;ration des actions</strong></h4>
                        <p>&nbsp;</p>
                        <p>La lib&eacute;ration de toutes actions qui viendraient &agrave; &ecirc;tre &eacute;mises contre esp&egrave;ces en augmentation du capital s&rsquo;effectuera, conform&eacute;ment aux dispositions l&eacute;gales et aux conditions d&rsquo;&eacute;mission.</p>
                        <p>Les appels de fonds seront port&eacute;s &agrave; la connaissance des actionnaires un mois avant l&rsquo;&eacute;poque fix&eacute;e pour chaque versement, par avis au J.O.R.T et par lettre recommand&eacute;e avec accus&eacute; de r&eacute;ception.</p>
                        <p>Les actionnaires auront &agrave; toute &eacute;poque, la facult&eacute; de se lib&eacute;rer par anticipation sans pouvoir pr&eacute;tendre &agrave; des int&eacute;r&ecirc;ts.</p>
                        <p>&nbsp;</p>
                        <h4><strong>Article 11 : Transmission des actions- Droit de sortie</strong></h4>
                        <h4><strong>&nbsp;</strong></h4>
                        <p><strong>11-1&nbsp;: Transmission des actions&nbsp;:</strong></p>
                        <p><strong>&nbsp;</strong></p>
                        <p>1) &nbsp;&nbsp;&nbsp;&nbsp; La cession des actions ne peut s'op&eacute;rer que sur pr&eacute;sentation d'une attestation d&rsquo;enregistrement d&eacute;livr&eacute;e par la Bourse des Valeurs Mobili&egrave;res de Tunis&nbsp; conform&eacute;ment &agrave; l'article 72 de la loi N&deg; 94-117 du Novembre 1994 r&eacute;gissant le march&eacute; financier.</p>
                        <p>&nbsp;</p>
                        <p>2) &nbsp;&nbsp;&nbsp;&nbsp; Les actions d&rsquo;apport ne sont n&eacute;gociables que deux ans apr&egrave;s la constitution d&eacute;finitive de la soci&eacute;t&eacute; et deux ans apr&egrave;s l'augmentation du capital, si elles proviennent de cette augmentation, le tout sous r&eacute;serve des exceptions pr&eacute;vues par l'article 319 du code des Soci&eacute;t&eacute;s Commerciales, lorsque les actions sont &eacute;mises &agrave; la suite d'une fusion ou d'un apport partiel d'actif et qu&rsquo;elles sont attribu&eacute;es &agrave; une soci&eacute;t&eacute; par actions ayant lors de la fusion ou de l&rsquo;apport plus de deux ann&eacute;es d&rsquo;existence et dont les actions &eacute;taient pr&eacute;c&eacute;demment n&eacute;gociables.</p>
                        <p>&nbsp;</p>
                        <ul>
                            <li>Les actions peuvent &ecirc;tre librement c&eacute;d&eacute;es en cas de cession par un actionnaire &agrave; une personne morale dans laquelle il d&eacute;tient directement ou indirectement 51% du capital ou qui d&eacute;tient directement ou indirectement au moins 51% du capital de l&rsquo;actionnaire c&eacute;dant.</li>
                        </ul>
                        <p>&nbsp;</p>
                        <p>4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Les actions non lib&eacute;r&eacute;es des versements exigibles ne sont pas admises au transfert ou cession &agrave; une soci&eacute;t&eacute; filiale.</p>
                        <p>&nbsp;</p>
                        <p>5) &nbsp;&nbsp;&nbsp;&nbsp; Conform&eacute;ment aux dispositions&nbsp; de l&rsquo;article 321 et suivants du code des soci&eacute;t&eacute;s commerciales&nbsp;:</p>
                        <p>&nbsp;</p>
                        <p>Sauf en cas de succession ou de cession soit &agrave; un conjoint, soit &agrave; un ascendant ou un descendant, &agrave; titre gratuit ou on&eacute;reux, la cession &agrave; un tiers d&rsquo;actions &eacute;mises par la soci&eacute;t&eacute; est soumise &agrave; l&rsquo;agr&eacute;ment de la soci&eacute;t&eacute; et&nbsp; &agrave; la pr&eacute;emption des actionnaires.</p>
                        <p>&nbsp;</p>
                        <p>A cet effet, la demande d&rsquo;agr&eacute;ment indiquant les noms, pr&eacute;noms du cessionnaire, le nombre des actions dont la cession est envisag&eacute;e et le prix offert est notifi&eacute;e par le c&eacute;dant &agrave; la soci&eacute;t&eacute;.</p>
                        <p>&nbsp;</p>
                        <p>L&rsquo;organe comp&eacute;tent pour statuer sur l&rsquo;agr&eacute;ment est le Conseil d&rsquo;Administration.</p>
                        <p>Lorsque le c&eacute;dant est membre du Conseil d&rsquo;Administration il participe au vote de la d&eacute;cision d&rsquo;agr&eacute;ment ou de refus d&rsquo;agr&eacute;ment</p>
                        <p>&nbsp;</p>
                        <p>- &nbsp;&nbsp;&nbsp; <u>L&rsquo;agr&eacute;ment r&eacute;sulte&nbsp;:</u></p>
                        <p>&nbsp;</p>
                        <ul>
                            <li>Soit d&rsquo;une notification expresse au c&eacute;dant,</li>
                        </ul>
                        <p>&nbsp;</p>
                        <ul>
                            <li>Soit du d&eacute;faut de r&eacute;ponse dans le d&eacute;lai de trois mois &agrave; compter de la demande d&rsquo;agr&eacute;ment notifi&eacute;e par le c&eacute;dant.</li>
                        </ul>
                        <p>&nbsp;</p>
                        <ul>
                            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <u>Refus d&rsquo;Agr&eacute;ment et Droit de Pr&eacute;emption&nbsp;:</u></li>
                        </ul>
                        <p>&nbsp;</p>
                        <ul>
                            <li>Le refus d&rsquo;agr&eacute;ment doit &ecirc;tre notifi&eacute; &agrave; l&rsquo;actionnaire c&eacute;dant par le Pr&eacute;sident du Conseil d&rsquo;Administration.</li>
                        </ul>
                        <p>&nbsp;</p>
                        <ul>
                            <li>Dans les trois mois de la notification du refus, sauf prorogation par d&eacute;cision de justice &agrave; la demande de la soci&eacute;t&eacute;, le Conseil d&rsquo;Administration doit faire b&eacute;n&eacute;ficier les actionnaires d&rsquo;un droit de pr&eacute;emption sur les actions propos&eacute;es &agrave; la vente dans les conditions suivantes&nbsp;:</li>
                        </ul>
                        <p>Le Pr&eacute;sident du Conseil d&rsquo;Administration doit, dans un d&eacute;lai de quinze (15) jours de la notification du refus d&rsquo;agr&eacute;ment, porter le nombre et le prix des actions &agrave; c&eacute;der et, le cas &eacute;ch&eacute;ant, l&rsquo;identit&eacute; du ou des acqu&eacute;reurs potentiels, ainsi que les conditions de la cession, &agrave; la connaissance des actionnaires, par lettre recommand&eacute;e avec accus&eacute; de r&eacute;ception.&nbsp;&nbsp;&nbsp;</p>
                        <p>Chacun des actionnaires dispose d&rsquo;un d&eacute;lai d&rsquo;un mois &agrave; compter de ladite lettre pour faire conna&icirc;tre au Pr&eacute;sident du Conseil d&rsquo;Administration s&rsquo;il se porte ou non acqu&eacute;reur des actions propos&eacute;es &agrave; la vente et il devra s&rsquo;engager express&eacute;ment &agrave; payer selon les conditions de paiement indiqu&eacute;es dans la notification.</p>
                        <p>Le droit de pr&eacute;emption ne pourra s&rsquo;exercer que sur la totalit&eacute; des actions propos&eacute;es &agrave; la vente.</p>
                        <p>&nbsp;</p>
                        <p>Si les demandes d&rsquo;achat &eacute;manent de plus d&rsquo;un actionnaire, les actions &agrave; vendre seront r&eacute;parties par le Pr&eacute;sident du Conseil d&rsquo;Administration entre les actionnaires qui auront fait ces offres d&rsquo;achat, proportionnellement au nombre d&rsquo;actions d&eacute;tenues par chacun d&rsquo;eux et dans la limite de leurs demandes.</p>
                        <p>&nbsp;</p>
                        <p>A l&rsquo;expiration du d&eacute;lai d&rsquo;un mois&nbsp; sus indiqu&eacute;, et &agrave; d&eacute;faut d&rsquo;actionnaire pr&eacute;empteur, le Conseil d&rsquo;Administration est tenu, soit de faire acqu&eacute;rir les actions par un tiers qu&rsquo;il agr&eacute;e, soit, avec le consentement du c&eacute;dant, de faire racheter les actions par la soci&eacute;t&eacute; en vue d&rsquo;une r&eacute;duction de capital.</p>
                        <p>&nbsp;</p>
                        <p>Dans cette derni&egrave;re hypoth&egrave;se, et &agrave; d&eacute;faut d&rsquo;accord entre les parties, le prix des actions est d&eacute;termin&eacute; par un expert comptable inscrit sur la liste des experts judiciaires, d&eacute;sign&eacute; par voie de r&eacute;f&eacute;r&eacute; par le Pr&eacute;sident du Tribunal du lieu du si&egrave;ge social.</p>
                        <p>A d&eacute;faut de rachat par la soci&eacute;t&eacute;, par un actionnaire pr&eacute;empteur ou par un tiers agr&eacute;&eacute; dans le d&eacute;lai de trois mois de la notification du refus d&rsquo;agr&eacute;ment, sauf prorogation par d&eacute;cision de justice &agrave; la demande de la soci&eacute;t&eacute;, le cessionnaire initial est cens&eacute; agr&eacute;&eacute; et le c&eacute;dant peut r&eacute;aliser la cession initialement projet&eacute;e.</p>
                        <p>&nbsp;</p>
                        <p>En cas de vente forc&eacute;e des actions de la soci&eacute;t&eacute;, l&rsquo;adjudicataire doit informer la soci&eacute;t&eacute; du r&eacute;sultat de l&rsquo;ench&egrave;re et demander l&rsquo;agr&eacute;ment du Conseil d&rsquo;Administration.</p>
                        <p>&nbsp;</p>
                        <p>- L&rsquo;agr&eacute;ment r&eacute;sulte&nbsp;:</p>
                        <p>&nbsp;</p>
                        <ul>
                            <li>Soit d&rsquo;une notification expresse &agrave; l&rsquo;adjudicataire.</li>
                        </ul>
                        <p>&nbsp;</p>
                        <ul>
                            <li>Soit du d&eacute;faut de r&eacute;ponse dans un d&eacute;lai d&rsquo;un (01) mois &agrave; compter de la demande d&rsquo;agr&eacute;ment notifi&eacute;e &agrave; l&rsquo;adjudicataire par le Pr&eacute;sident du Conseil d&rsquo;Administration.</li>
                        </ul>
                        <p>&nbsp;</p>
                        <p>Si la soci&eacute;t&eacute; fait savoir, dans le d&eacute;lai ci-dessus indiqu&eacute;, qu&rsquo;elle refuse d&rsquo;agr&eacute;er l&rsquo;adjudicataire, elle doit, dans le mois suivant la notification de ce refus, trouver un acqu&eacute;reur pour les actions adjug&eacute;es parmi les actionnaires ou les tiers, ou r&eacute;duire son capital et acheter les titres adjug&eacute;s sur la base du prix de l&rsquo;adjudication, major&eacute; des frais.</p>
                        <p>&nbsp;</p>
                        <p>A d&eacute;faut de solution dans le d&eacute;lai fix&eacute; et si le prix et les frais ne sont pas vers&eacute;s &agrave; l&rsquo;adjudicataire, l&rsquo;agr&eacute;ment de celui-ci est r&eacute;put&eacute; l&eacute;galement acquis.</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;<strong>11-2&nbsp;: Droit de sortie&nbsp;:</strong></p>
                        <p><strong>&nbsp;</strong></p>
                        <p><strong>&nbsp;</strong>Le ou les actionnaires d&eacute;tenant une fraction ne d&eacute;passant pas cinq pour cent (5%) du capital de la soci&eacute;t&eacute; peuvent proposer de se retirer de la soci&eacute;t&eacute; et imposer &agrave; l&rsquo;actionnaire d&eacute;tenant le reste du capital social individuellement ou par concert, l&rsquo;achat de leurs parts &agrave; un prix fix&eacute; par une expertise ordonn&eacute;e par la pr&eacute;sident du tribunal dans le ressort duquel se trouve le si&egrave;ge de la soci&eacute;t&eacute;. En cas de d&eacute;saccord de l&rsquo;actionnaire d&eacute;tenant le reste du capital social individuellement ou par concert sur le prix propos&eacute; dans le d&eacute;lai d&rsquo;un mois &agrave; compter de la notification du rapport d&rsquo;expertise, le prix est fix&eacute; par le tribunal comp&eacute;tent qui d&eacute;termine la valeur des actions et en ordonne le payement.</p>
                        <p>&nbsp;</p>
                        <h4><strong>Article 12 : Indivisibilit&eacute; des actions</strong></h4>
                        <p>&nbsp;</p>
                        <p>Les actions sont indivisibles &agrave; l&rsquo;&eacute;gard de la soci&eacute;t&eacute; qui ne reconna&icirc;t qu'un seul propri&eacute;taire pour chaque action. Les propri&eacute;taires indivis ou collectifs d'actions, notamment les h&eacute;ritiers ou ayants-droits d&rsquo;un actionnaire d&eacute;c&eacute;d&eacute;, sont tenus de se faire repr&eacute;senter aupr&egrave;s de la Soci&eacute;t&eacute; par un seul d'entre eux ou par un mandataire commun ayant qualit&eacute; pour assister aux assembl&eacute;es g&eacute;n&eacute;rales. A d&eacute;faut d'entente, il appartient &agrave; la partie la plus diligente de se pourvoir, ainsi que de droit, pour faire d&eacute;signer par justice un mandataire charg&eacute; de repr&eacute;senter tous les co-propri&eacute;taires.</p>
                        <p>&nbsp;</p>
                        <p>Les usufruitiers et nu-propri&eacute;taires doivent &eacute;galement se faire repr&eacute;senter par l'un d&rsquo;entre eux. A d&eacute;faut de convention contraire entre l'usufruitier et le nu-propri&eacute;taire signifi&eacute;e &agrave; la Soci&eacute;t&eacute;, celle-ci consid&egrave;re que l'usufruitier repr&eacute;sente valablement le nu-propri&eacute;taire, quelles que soient les d&eacute;cisions &agrave; prendre.</p>
                        <p><strong>&nbsp;</strong></p>
                        <h4><strong>Article 13 : Droits de l'action</strong></h4>
                        <p>&nbsp;</p>
                        <p>Chaque action donne droit dans la propri&eacute;t&eacute; de l'actif social &agrave; une part proportionnelle au nombre des actions &eacute;mises et en outre, &agrave; une part dans les b&eacute;n&eacute;fices, ainsi qu&rsquo;il est indiqu&eacute; ci&shy; apr&egrave;s.</p>
                        <p>&nbsp;</p>
                        <h4><strong>&nbsp;</strong></h4>
                        <h4><strong>Article 14 : Responsabilit&eacute; limit&eacute;e de l&rsquo;actionnaire</strong></h4>
                        <p>&nbsp;</p>
                        <p>Les actionnaires ne sont responsables que jusqu'&agrave; concurrence du montant des actions qu'ils poss&egrave;dent.</p>
                        <p>&nbsp;</p>
                        <h4><strong>Article 15 : Transmission des droits de l&rsquo;action </strong></h4>
                        <p>&nbsp;</p>
                        <p>Les droits et obligations attach&eacute;s &agrave; l'action suivent le titre dans quelque main qu'il passe.</p>
                        <p>La possession d'une action emporte de plein droit adh&eacute;sion aux pr&eacute;sents statuts et aux d&eacute;cisions r&eacute;guli&egrave;rement prises par l'Assembl&eacute;e G&eacute;n&eacute;rale.</p>
                        <p>&nbsp;</p>
                        <p><strong>Titre Quatre</strong></p>
                        <p><strong>Administration de la soci&eacute;t&eacute;</strong></p>
                        <p><strong><u>Article 16- Composition du conseil d&rsquo;Administration</u></strong></p>
                        <p>La soci&eacute;t&eacute; est administr&eacute;e par un conseil d&rsquo;administration compos&eacute; de trois membres au moins et de douze membres au plus, nomm&eacute;s par l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale Constitutive ou par l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale Ordinaire pour une p&eacute;riode de 3 ans.</p>
                        <p>La qualit&eacute; d&rsquo;actionnaire n&rsquo;est pas requise pour &ecirc;tre membre du Conseil d&rsquo;Administration.</p>
                        <p>Les soci&eacute;t&eacute;s et les personnes morales, actionnaires de la pr&eacute;sente soci&eacute;t&eacute; peuvent faire partie de son Conseil d&rsquo;Administration. Elles sont repr&eacute;sent&eacute;es aux d&eacute;lib&eacute;rations du Conseil par un repr&eacute;sentant permanent ayant pouvoir &agrave; cet effet, lequel repr&eacute;sentant n&rsquo;est pas tenu d&rsquo;&ecirc;tre personnellement actionnaire de ladite soci&eacute;t&eacute;.</p>
                        <p>La soci&eacute;t&eacute; qui se fera repr&eacute;senter dans le Conseil d&rsquo;Administration aura toute libert&eacute; pour remplacer son repr&eacute;sentant par une autre personne pendant le cours de ses fonctions d&rsquo;administrateur.</p>
                        <p><strong><u>Article 17- Dur&eacute;e des fonctions, vacances</u></strong></p>
                        <p>La dur&eacute;e des fonctions des administrateurs est de trois (3) ann&eacute;es.</p>
                        <p>Le premier Conseil sera nomm&eacute; par l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale Constitutive de la soci&eacute;t&eacute; et restera en fonction jusqu'&agrave; l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale Ordinaire qui d&eacute;lib&eacute;rera sur l&rsquo;approbation des comptes du 3<sup>&egrave;me</sup> exercice et qui renouvellera le conseil en entier et ainsi de suite.</p>
                        <p>Tout membre sortant est r&eacute;&eacute;ligible.</p>
                        <p>En cas de vacance d&rsquo;un poste au Conseil d&rsquo;Administration, suite &agrave; un d&eacute;c&egrave;s, une incapacit&eacute; physique, une d&eacute;mission ou la survenance d&rsquo;une incapacit&eacute; juridique, le Conseil d&rsquo;Administration peut, entre deux Assembl&eacute;es G&eacute;n&eacute;rales, proc&eacute;der &agrave; des nominations &agrave; titre provisoire pour atteindre le minimum l&eacute;gal.</p>
                        <p>Cette nomination est soumise &agrave; la ratification de la prochaine Assembl&eacute;e G&eacute;n&eacute;rale Ordinaire. Au cas o&ugrave; l&rsquo;approbation n&rsquo;aura pas lieu, les d&eacute;lib&eacute;rations prises et les actes entrepris n&rsquo;en seront pas moins valables.</p>
                        <p>Lorsque le nombre des membres du Conseil d&rsquo;Administration devient inf&eacute;rieur au minimum l&eacute;gal, les autres membres doivent convoquer imm&eacute;diatement l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale Ordinaire en vue du comblement de l&rsquo;insuffisance du nombre des membres.</p>
                        <p><strong><u>Article 18- Bureau du conseil</u></strong></p>
                        <p>&nbsp;Le conseil nomme parmi ses membres un <strong>Pr&eacute;sident</strong> pris parmi les administrateurs</p>
                        <p>Le Pr&eacute;sident du conseil d&rsquo;Administration doit toujours &ecirc;tre une personne physique et actionnaire de la soci&eacute;t&eacute;. Il peut &ecirc;tre &eacute;lu pour la dur&eacute;e de son mandat d&rsquo;administrateur.</p>
                        <p>Le Pr&eacute;sident peut toujours &ecirc;tre r&eacute;&eacute;lu. Il a pour mission de pr&eacute;sider les s&eacute;ances du conseil et les r&eacute;unions des Assembl&eacute;es G&eacute;n&eacute;rales.</p>
                        <p>Le conseil d&eacute;signe aussi un secr&eacute;taire qui peut &ecirc;tre choisi en dehors des actionnaires.</p>
                        <p>En cas d&rsquo;absence du Pr&eacute;sident, le conseil d&eacute;signe, pour chaque s&eacute;ance, parmi les membres&nbsp; pr&eacute;sents &agrave; la r&eacute;union, celui des membres pr&eacute;sents qui remplira les fonctions de pr&eacute;sident.</p>
                        <p>Les membres du bureau sont toujours r&eacute;&eacute;ligibles.</p>
                        <p><strong><u>Article 19 &ndash; R&eacute;union du conseil &ndash; D&eacute;lib&eacute;rations</u></strong></p>
                        <p>Le conseil d&rsquo;administration se r&eacute;unit au si&egrave;ge social ou dans tout autre endroit qu&rsquo;il d&eacute;signe m&ecirc;me en dehors de la Tunisie, sur la convocation de son Pr&eacute;sident ou de la moiti&eacute; de ses membres aussi souvent que l&rsquo;int&eacute;r&ecirc;t de la soci&eacute;t&eacute; l&rsquo;exige avec un pr&eacute;avis de quinze (15) jours.</p>
                        <p>La pr&eacute;sence effective de la moiti&eacute; plus un des membres du Conseil d&rsquo;Administration est n&eacute;cessaire pour la validit&eacute; des d&eacute;lib&eacute;rations.</p>
                        <p>Toutefois, le conseil peut se r&eacute;unir sur une convocation verbale et sans d&eacute;lai si tous les membres sont pr&eacute;sents ou repr&eacute;sent&eacute;s.</p>
                        <p>Chacun des administrateurs peut se faire repr&eacute;senter &agrave; chaque s&eacute;ance par un autre administrateur. Les pouvoirs ne sont valables que pour une seule s&eacute;ance et peuvent &ecirc;tre donn&eacute;s par simple lettre, par t&eacute;l&eacute;gramme, par t&eacute;l&eacute;copie ou par tout autre &eacute;crit ayant date certaine.</p>
                        <p>Les d&eacute;cisions du Conseil d&rsquo;Administration sont prises &agrave; la majorit&eacute; des membres pr&eacute;sents ou repr&eacute;sent&eacute;s.</p>
                        <p>En cas de partage des voix, la voix du pr&eacute;sident n&rsquo;est pas pr&eacute;pond&eacute;rante.</p>
                        <p><strong><u>Article 20- Proc&egrave;s-verbaux</u></strong></p>
                        <p>Les d&eacute;lib&eacute;rations du Conseil d&rsquo;Administration sont constat&eacute;es par des proc&egrave;s-verbaux inscrits sur un registre sp&eacute;cial tenu au si&egrave;ge de la soci&eacute;t&eacute; et qui sont sign&eacute;s par le pr&eacute;sident de la s&eacute;ance et le secr&eacute;taire ou par la majorit&eacute; des membres pr&eacute;sents et le secr&eacute;taire.</p>
                        <p>Les copies ou extraits de ces proc&egrave;s-verbaux, &agrave; produire en justice ou ailleurs sont sign&eacute;s&nbsp; par le pr&eacute;sident et &nbsp;par deux administrateurs repr&eacute;sentant les deux plus grands actionnaires.</p>
                        <p><strong><u>Article 21- Pouvoirs du conseil</u></strong></p>
                        <p>Le conseil a les pouvoirs les plus &eacute;tendus, sans limitation et sans r&eacute;serve pour agir au nom de la soci&eacute;t&eacute; et faire toutes les op&eacute;rations relatives &agrave; son objet.</p>
                        <p>Tout ce qui n&rsquo;est pas express&eacute;ment r&eacute;serv&eacute; &agrave; l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale par les lois et les pr&eacute;sents statuts, est de sa comp&eacute;tence.</p>
                        <p>Il a notamment les pouvoirs suivants, lesquels sont &eacute;nonciatifs et non limitatifs&nbsp;:</p>
                        <ul>
                            <li>Il d&eacute;cide de l&rsquo;opportunit&eacute; de la s&eacute;paration entre les fonctions du Pr&eacute;sident du Conseil d&rsquo;Administration et du Directeur G&eacute;n&eacute;ral de la Soci&eacute;t&eacute;.</li>
                            <li>Il &eacute;tablit les r&egrave;glements int&eacute;rieurs de la soci&eacute;t&eacute;.</li>
                            <li>Il cr&eacute;e des si&egrave;ges administratifs, agences, bureaux et succursales partout o&ugrave; il le juge utile, en Tunisie et &agrave; l&rsquo;&eacute;tranger, il les d&eacute;place ou les supprime.</li>
                            <li>Il nomme le Pr&eacute;sident du Conseil d&rsquo;Administration, le Directeur G&eacute;n&eacute;ral et le Directeur G&eacute;n&eacute;ral adjoint et d&eacute;termine leurs r&eacute;mun&eacute;rations.</li>
                            <li>Il nomme et r&eacute;voque tous les agents et employ&eacute;s de la soci&eacute;t&eacute;, fixe leur traitement, salaires, remises, gratifications et participations proportionnelles ainsi que les autres conditions de leur admission et de leur retraite. Il organise toutes caisses de secours et de pr&eacute;voyance pour le personnel.</li>
                            <li>Il remplit toutes formalit&eacute;s pour soumettre la soci&eacute;t&eacute; aux lois et usages des pays dans lesquels elle pourrait op&eacute;rer, nomme tout agent responsable.</li>
                            <li>Il fixe les d&eacute;penses g&eacute;n&eacute;rales d&rsquo;administration, effectue les approvisionnements de toutes sortes.</li>
                            <li>Il touche les sommes dues &agrave; la soci&eacute;t&eacute; et paie celles qu&rsquo;elle doit.</li>
                            <li>Il d&eacute;termine le placement des sommes disponibles et r&egrave;gle l&rsquo;emploi des fonds de r&eacute;serve.</li>
                            <li>Il souscrit, endosse, accepte et acquitte tous les effets de commerce.</li>
                            <li>Il contracte et r&eacute;silie toutes polices ou contrats d&rsquo;assurance concernant les risques de toute nature.</li>
                            <li>Il passe et autorise tout contrat, march&eacute; entrepris &agrave; forfait ou autrement entrant dans l&rsquo;objet de la soci&eacute;t&eacute;. Il peut notamment conclure avec toute personne physique ou morale tout contrat de commission, d&rsquo;agence ou de repr&eacute;sentation avec exclusivit&eacute; ou non.</li>
                            <li>Il demande et accepte toutes cessions, fait toutes soumissions, prend part &agrave; toutes adjudications, fournit tous cautionnements.</li>
                            <li>Il autorise toute acquisition, tout retrait, transfert, ali&eacute;nation de rentes, valeur, cr&eacute;ance, fonds de commerce, brevet, licence et brevet d&rsquo;invention et autres droits mobiliers quelconques.</li>
                            <li>Il consent ou accepte, c&egrave;de ou r&eacute;silie tous baux et locations, avec ou, sans promesse de vente.</li>
                            <li>Il d&eacute;cide et r&eacute;alise toutes acquisitions, toutes ventes et tous &eacute;changes de tous biens et droits mobiliers et immobiliers.</li>
                            <li>Il prend et donne en nantissement, en gage et en hypoth&egrave;que tout bien meuble ou immeuble au profit de la soci&eacute;t&eacute; ou de tiers.</li>
                            <li>Il se fait ouvrir aupr&egrave;s de toutes banques, ainsi qu&rsquo;aupr&egrave;s de tous &eacute;tablissements financiers, tous comptes et cr&eacute;e tous ch&egrave;ques et effets pour le fonctionnement de ces comptes.</li>
                            <li>Il fait toutes constructions, am&eacute;nagements et installations ainsi que tous travaux.</li>
                            <li>Il autorise tous cr&eacute;dits et avances.</li>
                            <li>Il contracte tous emprunts, par voie d&rsquo;ouverture de cr&eacute;dit ou autrement&nbsp;; toutefois, les emprunts sous forme de cr&eacute;ation de bons ou d&rsquo;obligations doivent &ecirc;tre autoris&eacute;s par l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale des Actionnaires.</li>
                            <li>Il donne la caution simple ou solidaire de la soci&eacute;t&eacute; pour assurer le paiement de dettes contract&eacute;es par des tiers sous forme d&rsquo;obligations ou autrement et avalise tous effets de commerce ou garantit l&rsquo;ex&eacute;cution de toutes conventions pass&eacute;es avec des tiers, ainsi que tous engagements contract&eacute;s par ceux-ci, le tout lorsqu&rsquo;il le juge utile, dans l&rsquo;int&eacute;r&ecirc;t de la soci&eacute;t&eacute;.</li>
                            <li>Il conf&egrave;re, s&rsquo;il y a lieu, toutes garanties mobili&egrave;res et immobili&egrave;res notamment toutes hypoth&egrave;ques et tous nantissements sur les biens de la soci&eacute;t&eacute;.</li>
                            <li>Il fonde toutes soci&eacute;t&eacute;s tunisiennes ou &eacute;trang&egrave;res ou concourt &agrave; leur fondation, il fait &agrave; des soci&eacute;t&eacute;s constitu&eacute;es tous apports qu&rsquo;il juge convenables, il souscrit, ach&egrave;te et c&egrave;de toutes actions, obligations et tous droits quelconques&nbsp;; il int&eacute;resse la soci&eacute;t&eacute; dans toutes participations et tous syndicats.</li>
                            <li>Il exerce toutes actions, judiciaires, tant en demandant qu&rsquo;en d&eacute;fendant d&eacute;pose toutes r&eacute;quisitions d&rsquo;immatriculation.</li>
                            <li>Il repr&eacute;sente la soci&eacute;t&eacute; dans toutes op&eacute;rations de faillite et de liquidation, adh&egrave;re &agrave; tous r&egrave;glements amiables, et &agrave; tous concordats, fait toutes remises de dettes, consent la transformation de cr&eacute;ances en parts b&eacute;n&eacute;ficiaires, actions ou obligations.</li>
                            <li>Il autorise aussi toutes transactions, compromis, tous acquiescements et d&eacute;sistements ainsi que toutes d&eacute;l&eacute;gations, cessions d&rsquo;ant&eacute;riorit&eacute;s et subrogations avec ou sans garantie et toutes main-lev&eacute;e d&rsquo;inscription, saisie, opposition et autres emp&ecirc;chements avant ou apr&egrave;s paiement.</li>
                            <li>Il arr&ecirc;te les &eacute;tats de situation, les inventaires, et les comptes qui doivent &ecirc;tre soumis &agrave; l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale des Actionnaires.</li>
                            <li>Il accomplit, au nom de la soci&eacute;t&eacute;, tous actes qui ne sont pas express&eacute;ment r&eacute;serv&eacute;s &agrave; l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale par la loi ou par les pr&eacute;sents statuts.</li>
                            <li>Il statue sur toutes propositions &agrave; faire &agrave; l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale des Actionnaires et arr&ecirc;te l&rsquo;ordre du jour.</li>
                            <li>Il arr&ecirc;te les inventaires et les comptes &agrave; soumettre &agrave; l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale et statue sur toutes les propositions d&rsquo;attribution et de r&eacute;partition des b&eacute;n&eacute;fices &agrave; pr&eacute;senter aux actionnaires.</li>
                        </ul>
                        <h4><strong>&nbsp;</strong></h4>
                        <h4><strong>&nbsp;Article 22 : Pouvoir du&nbsp; Directeur G&eacute;n&eacute;ral</strong></h4>
                        <p>La Direction G&eacute;n&eacute;rale de la Soci&eacute;t&eacute; est assur&eacute;e par un <strong>Directeur G&eacute;n&eacute;ral</strong>.</p>
                        <p>Le Conseil d&rsquo;Administration d&eacute;signe pour une dur&eacute;e d&eacute;termin&eacute;e le Directeur G&eacute;n&eacute;ral de la Soci&eacute;t&eacute;. Si le Directeur G&eacute;n&eacute;ral est membre du Conseil d&rsquo;Administration, la dur&eacute;e de ses fonctions ne peut exc&eacute;der celle de son mandat.</p>
                        <p>Le Directeur G&eacute;n&eacute;ral doit &ecirc;tre une personne physique.</p>
                        <p><strong><u>&nbsp;</u></strong></p>
                        <p>Le&nbsp; Directeur G&eacute;n&eacute;ral&nbsp; assure sous sa responsabilit&eacute; la direction g&eacute;n&eacute;rale de la soci&eacute;t&eacute;, le Conseil d&rsquo;Administration doit lui d&eacute;l&eacute;guer &agrave; cet effet tous les pouvoirs n&eacute;cessaires.</p>
                        <p>&nbsp;</p>
                        <p>Sur sa proposition, le conseil peut, pour l&rsquo;assister, lui adjoindre au titre de Directeur G&eacute;n&eacute;ral Adjoint, soit un de ses membres, soit un mandataire choisi hors de son sein.</p>
                        <p>&nbsp;</p>
                        <p>Dans le cas o&ugrave; le Pr&eacute;sident du Conseil d&rsquo;Administration se trouve emp&ecirc;ch&eacute; d&rsquo;exercer ses fonctions, le Conseil d&rsquo;Administration peut d&eacute;l&eacute;guer un de ses membres dans les fonctions de Pr&eacute;sident. Cette d&eacute;l&eacute;gation renouvelable est toujours donn&eacute;e pour une dur&eacute;e limit&eacute;e et renouvelable.</p>
                        <p>&nbsp;</p>
                        <p>Aucun membre du conseil autre que le Directeur G&eacute;n&eacute;ral, l&rsquo;Administrateur recevant une d&eacute;l&eacute;gation temporaire, comme il est dit ci &ndash; dessus, et le Directeur G&eacute;n&eacute;ral Adjoint ne peut &ecirc;tre investi des fonctions de direction de la soci&eacute;t&eacute;.&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p><strong><u>Article 23- Fonctions du pr&eacute;sident du conseil d&rsquo;administration</u></strong></p>
                        <p>Le Pr&eacute;sident du Conseil d&rsquo;Administration propose l&rsquo;ordre du jour du conseil, le convoque, pr&eacute;side ses r&eacute;unions et veille &agrave; la r&eacute;alisation des options arr&ecirc;t&eacute;es par le conseil.</p>
                        <p>Lorsque le Pr&eacute;sident se trouve emp&ecirc;ch&eacute; d&rsquo;exercer ses fonctions, il peut d&eacute;l&eacute;guer tout ou partie de celles-ci &agrave; un administrateur, cette d&eacute;l&eacute;gation renouvelable est toujours donn&eacute;e pour une dur&eacute;e limit&eacute;e.</p>
                        <p><strong><u>Article 24 &ndash; R&eacute;mun&eacute;ration du Pr&eacute;sident du conseil,&nbsp; du Directeur G&eacute;n&eacute;ral, du directeur general adjoint et des administrateurs </u></strong></p>
                        <p>L&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale Ordinaire peut allouer aux administrateurs une r&eacute;mun&eacute;ration fixe annuelle &agrave; titre de jetons de pr&eacute;sence, dont le montant est port&eacute; dans les frais g&eacute;n&eacute;raux et reste maintenu jusqu&rsquo;&agrave; d&eacute;cision contraire.</p>
                        <p>Le Conseil d&rsquo;Administration r&eacute;partit ces r&eacute;mun&eacute;rations&nbsp; entre ses membres dans les proportions qu&rsquo;il juge convenables.</p>
                        <p>Le Conseil d&rsquo;Administration fixera les conditions de r&eacute;mun&eacute;ration du Pr&eacute;sident du Conseil d&rsquo;Administration, du Directeur G&eacute;n&eacute;ral et, le cas &eacute;ch&eacute;ant, du Directeur G&eacute;n&eacute;ral Adjoint, lesquelles r&eacute;mun&eacute;rations ou allocations seront port&eacute;es au compte des frais g&eacute;n&eacute;raux de la soci&eacute;t&eacute;.</p>
                        <p>En outre, il peut &ecirc;tre allou&eacute; par le Conseil d&rsquo;Administration des r&eacute;mun&eacute;rations exceptionnelles pour les missions ou mandats confi&eacute;s &agrave; des administrateurs.</p>
                        <p>Les r&eacute;mun&eacute;rations exceptionnelles pr&eacute;vues par l&rsquo;alin&eacute;a ci-dessus doivent &ecirc;tre port&eacute;es &agrave; la connaissance du Commissaire aux Comptes, figurer sur un rapport sp&eacute;cial et soumises &agrave; l&rsquo;approbation de l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale.</p>
                        <p><strong><u>Article 25 &ndash; Responsabilit&eacute; des administrateurs</u></strong></p>
                        <p>Les administrateurs ne contractent en raison de leur mandat et de leur gestion, d&rsquo;autres obligations et responsabilit&eacute;s que celles pr&eacute;vues par la l&eacute;gislation en vigueur.</p>
                        <p><strong><u>&nbsp;</u></strong></p>
                        <p><strong><u>ARTICLE 26: Evitement des conflits d&rsquo;int&eacute;r&ecirc;ts &ndash; Op&eacute;rations soumises &agrave; autorisation, &agrave; approbation et &agrave; audit- Op&eacute;rations interdites- Op&eacute;rations libres -Signatures</u></strong></p>
                        <p><strong>&nbsp;</strong></p>
                        <p><strong>26-1&nbsp;: Evitement des conflits d&rsquo;int&eacute;r&ecirc;ts&nbsp;:</strong></p>
                        <p><strong><em>&nbsp;</em></strong></p>
                        <p><em>Le </em>Pr&eacute;sident du Conseil d&rsquo;Administration, le Directeur G&eacute;n&eacute;ral, le Directeur G&eacute;n&eacute;ral Adjoint, les membres du Conseil d&rsquo;Administration et g&eacute;n&eacute;ralement les dirigeants de la soci&eacute;t&eacute; doivent veiller &agrave; &eacute;viter tout conflit&nbsp; entre leurs int&eacute;r&ecirc;ts personnels et ceux de la soci&eacute;t&eacute; et &agrave; ce que les termes des op&eacute;rations qu&rsquo;ils concluent avec la soci&eacute;t&eacute; soient &eacute;quitables. Ils doivent d&eacute;clarer par &eacute;crit au Conseil d&rsquo;Administration tout int&eacute;r&ecirc;t direct ou indirect qu&rsquo;ils ont dans les contrats ou op&eacute;rations conclues avec la soci&eacute;t&eacute; ou demander de le mentionner dans les proc&egrave;s verbaux du Conseil d&rsquo;Administration.</p>
                        <p>&nbsp;</p>
                        <p><strong>&nbsp;</strong></p>
                        <p><strong>&nbsp;</strong></p>
                        <p><strong>26-2&nbsp;: Op&eacute;rations soumises &agrave; autorisation, &agrave; approbation et &agrave; audit&nbsp;:</strong></p>
                        <p><strong>&nbsp;</strong></p>
                        <ol>
                            <li><strong>a) Op&eacute;rations soumises &agrave; l&rsquo;autorisation pr&eacute;alable du Conseil d&rsquo;Administration&nbsp;:</strong></li>
                        </ol>
                        <p>&nbsp;</p>
                        <p>Sont soumises &agrave; l&rsquo;autorisation pr&eacute;alable du Conseil d&rsquo;Administration&nbsp;:</p>
                        <p>&nbsp;</p>
                        <p>* Toute convention conclue directement ou par personne interpos&eacute;e entre&nbsp;:</p>
                        <ul>
                            <li>la soci&eacute;t&eacute;, d&rsquo;une part, et</li>
                            <li>le Pr&eacute;sident du Conseil d&rsquo;Administration, le Directeur G&eacute;n&eacute;ral, l&rsquo;un des Directeurs G&eacute;n&eacute;raux Adjoints, l&rsquo;un des membre du Conseil d&rsquo;Administration, l&rsquo;un des actionnaires, personne physique ou morale d&eacute;tenant directement ou indirectement une fraction des droits de vote sup&eacute;rieure &agrave; dix pour cent (10%) du capital social ou la soci&eacute;t&eacute; la contr&ocirc;lant au sens de l&rsquo;article 461 du code des Soci&eacute;t&eacute;s Commerciales, d&rsquo;autre part,</li>
                        </ul>
                        <p>* Toutes les conventions dans lesquelles les personnes ci-dessus vis&eacute;es sont indirectement int&eacute;ress&eacute;es,</p>
                        <p><strong>* </strong>Les conventions conclues entre la Soci&eacute;t&eacute; et une autre soci&eacute;t&eacute; lorsque le Directeur G&eacute;n&eacute;ral, l&rsquo;un des directeurs g&eacute;n&eacute;raux adjoints ou l&rsquo;un des administrateurs est associ&eacute; tenu solidairement des dettes de cette soci&eacute;t&eacute;, g&eacute;rant, directeur g&eacute;n&eacute;ral, administrateur ou, d&rsquo;une fa&ccedil;on g&eacute;n&eacute;rale, dirigeant de cette soci&eacute;t&eacute;.</p>
                        <p>&nbsp;</p>
                        <p>Lorsqu&rsquo;elle est membre du Conseil d&rsquo;administration, la personne int&eacute;ress&eacute;e ne prend pas part au vote sur l&rsquo;autorisation sollicit&eacute;e.</p>
                        <p><strong>&nbsp;</strong></p>
                        <ol>
                            <li><strong>b) Op&eacute;rations soumises &agrave; l&rsquo;autorisation pr&eacute;alable du Conseil d&rsquo;Administration, &agrave; l&rsquo;approbation de l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale et &agrave; l&rsquo;audit du Commissaire aux Comptes&nbsp;:</strong></li>
                        </ol>
                        <p><strong>&nbsp;</strong></p>
                        <p><strong>* Autorisations&nbsp;:</strong> Sont soumises &agrave; l&rsquo;autorisation pr&eacute;alable du Conseil d&rsquo;Administration, &agrave; l&rsquo;approbation de l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale et &agrave; l&rsquo;audit du Commissaire aux Comptes, les op&eacute;rations suivantes&nbsp;:</p>
                        <p>&nbsp;</p>
                        <ul>
                            <li>la cession des fonds de commerce ou d&rsquo;un de leurs &eacute;l&eacute;ments, ou leur location &agrave; un tiers,</li>
                            <li>Les emprunts importants conclus au profit de la soci&eacute;t&eacute; et dont le plafond est fix&eacute; &agrave; {plafond}</li>
                            <li>La vente des immeubles de la soci&eacute;t&eacute;,</li>
                            <li>Les garanties des dettes d&rsquo;autrui pour tout montant sup&eacute;rieur &agrave; {garanties}</li>
                        </ul>
                        <p>Chacune des personnes indiqu&eacute;es au paragraphe a) du pr&eacute;sent article doit informer le Directeur G&eacute;n&eacute;ral de toute convention soumise aux proc&eacute;dures d&rsquo;autorisation, d&rsquo;approbation et d&rsquo;audit d&egrave;s qu&rsquo;elle en prend connaissance.</p>
                        <p>&nbsp;</p>
                        <p>Le Directeur G&eacute;n&eacute;ral doit informer le Commissaire aux Comptes de toute convention autoris&eacute;e et la soumettre &agrave; l&rsquo;approbation de l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale.</p>
                        <p>&nbsp;</p>
                        <p>Le Commissaire aux comptes &eacute;tablit un rapport sp&eacute;cial sur ces op&eacute;rations, au vu duquel l&rsquo;assembl&eacute;e G&eacute;n&eacute;rale d&eacute;lib&egrave;re.</p>
                        <p>&nbsp;</p>
                        <p>La personne int&eacute;ress&eacute;e qui a particip&eacute; &agrave; l&rsquo;op&eacute;ration ou qui y a un int&eacute;r&ecirc;t indirect ne peut prendre part au vote et ses actions ne sont pas prises en compte pour le calcul du quorum et de la majorit&eacute;.</p>
                        <p>&nbsp;</p>
                        <p>* <strong>Approbations&nbsp;&ndash; d&eacute;sapprobations&nbsp;:</strong></p>
                        <p>&nbsp;</p>
                        <p>Les conventions approuv&eacute;es par l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale, ainsi que celles qu&rsquo;elle d&eacute;sapprouve, produisent leurs effets &agrave; l&rsquo;&eacute;gard des tiers sauf lorsqu&rsquo;elles sont annul&eacute;es pour dol.</p>
                        <p>Les cons&eacute;quences pr&eacute;judiciables &agrave; la soci&eacute;t&eacute; de ces conventions sont mises &agrave; la charge de l&rsquo;int&eacute;ress&eacute; lorsqu&rsquo;elles ne sont pas autoris&eacute;es par le Conseil d&rsquo;Administration et d&eacute;sapprouv&eacute;es par l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale.</p>
                        <p>Pour les op&eacute;rations autoris&eacute;es par le Conseil d&rsquo;Administration et d&eacute;sapprouv&eacute;es par l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale, la responsabilit&eacute; est mise &agrave; la charge de l&rsquo;int&eacute;ress&eacute; et des administrateurs, &agrave; moins qu&rsquo;ils n&rsquo;&eacute;tablissent qu&rsquo;ils n&rsquo;en sont pas responsables.</p>
                        <p>&nbsp;</p>
                        <ol>
                            <li><strong>c) Engagements relatifs aux r&eacute;mun&eacute;rations, indemnit&eacute;s ou avantages accord&eacute;s aux dirigeants</strong>:</li>
                        </ol>
                        <p>&nbsp;</p>
                        <p>Les obligations et engagements pris par la soci&eacute;t&eacute; elle-m&ecirc;me ou par une soci&eacute;t&eacute; qu&rsquo;elle contr&ocirc;le au sens de l&rsquo;article 461 du Code des Soci&eacute;t&eacute;s Commerciales, au profit de Directeur G&eacute;n&eacute;ral, du Directeur G&eacute;n&eacute;ral Adjoint ou de l&rsquo;un de ses administrateurs, concernant les &eacute;l&eacute;ments de leur r&eacute;mun&eacute;ration, les indemnit&eacute;s ou avantages qui leurs sont dus ou auxquels ils pourraient avoir droit au titre de la cessation ou de la modification de leurs fonctions ou suite &agrave; la cessation ou &agrave; la modification de leurs fonctions, sont soumises aux dispositions du paragraphe a) du pr&eacute;sent article.</p>
                        <p>&nbsp;</p>
                        <p>La personne int&eacute;ress&eacute;e doit informer le Directeur G&eacute;n&eacute;ral desdites obligations ou engagements. Le Directeur G&eacute;n&eacute;ral doit en informer le Commissaire aux Comptes qui &eacute;tablit un rapport sp&eacute;cial au vu duquel l&rsquo;Assembl&eacute;e g&eacute;n&eacute;rale d&eacute;lib&egrave;re.</p>
                        <p>La personne int&eacute;ress&eacute;e&nbsp; ne peut prendre part au vote et ses actions ne sont pas prises en compte pour le calcul du quorum et de la majorit&eacute;.</p>
                        <p>&nbsp;</p>
                        <p>En outre de la responsabilit&eacute; de l&rsquo;int&eacute;ress&eacute; ou du Conseil d&rsquo;Administration le cas &eacute;ch&eacute;ant, les conventions conclues en violation du paragraphe ci-dessus peuvent, le cas &eacute;ch&eacute;ant, &ecirc;tre annul&eacute;es lorsqu&rsquo;elles causent un pr&eacute;judice &agrave; la soci&eacute;t&eacute;.</p>
                        <p>&nbsp;</p>
                        <p><strong>26-3&nbsp;: Op&eacute;rations interdites&nbsp;:</strong></p>
                        <p><strong>&nbsp;</strong></p>
                        <p>A l&rsquo;exception des personnes morales membres du Conseil d&rsquo;Administration, il est interdit au Directeur G&eacute;n&eacute;ral, aux Directeurs G&eacute;n&eacute;raux Adjoints et aux membres du Conseil d&rsquo;Administration ainsi qu&rsquo;aux conjoint, ascendants, descendants et toute personne interpos&eacute;e au profit de l&rsquo;un d&rsquo;eux, de contracter sous quelque forme que ce soit, des emprunts avec la soci&eacute;t&eacute;, de se faire consentir par elle une avance, un d&eacute;couvert en compte courant ou autrement, ou d&rsquo;en recevoir des subventions, ainsi que de faire cautionner ou avaliser par elle leurs engagements envers les tiers, sous peine de nullit&eacute; du contrat.</p>
                        <p>Cette interdiction s&rsquo;applique &eacute;galement aux repr&eacute;sentants permanents des personnes morales membres du Conseil d&rsquo;Administration.</p>
                        <p>&nbsp;</p>
                        <p>A peine de nullit&eacute; du contrat, il est interdit &agrave; tout actionnaire, &agrave; son conjoint, ses ascendants, ou descendants ou toute personne interpos&eacute;e pour le compte de l&rsquo;un d&rsquo;eux, de contracter sous quelque forme que ce soit, des emprunts avec la soci&eacute;t&eacute;, de se faire consentir par elle une avance, un d&eacute;couvert en compte courant ou autrement, ou d&rsquo;en recevoir des subventions afin de les utiliser pour la souscription dans les actions de la soci&eacute;t&eacute;.</p>
                        <p>&nbsp;</p>
                        <p><strong>26-4&nbsp;: Op&eacute;rations libres&nbsp;:</strong></p>
                        <p><strong>&nbsp;</strong></p>
                        <p>Les conventions vis&eacute;es &agrave; l&rsquo;article 26-2 ci-dessus ne sont pas applicables aux op&eacute;rations courantes.</p>
                        <p>Cependant, ces conventions doivent &ecirc;tre communiqu&eacute;es par l&rsquo;int&eacute;ress&eacute; au Pr&eacute;sident du Conseil d&rsquo;Administration et au Directeur G&eacute;n&eacute;ral. Une liste d&eacute;taill&eacute;e de ces conventions est communiqu&eacute;e aux membres du Conseil d&rsquo;Administration et au Commissaire aux Comptes. Ces op&eacute;rations sont audit&eacute;es selon les normes d&rsquo;audit d&rsquo;usage.</p>
                        <p>&nbsp;</p>
                        <p><strong>26-5</strong>&nbsp;: <strong>Signature&nbsp;:</strong> Les actes concernant la Soci&eacute;t&eacute;, d&eacute;cid&eacute;s ou autoris&eacute;s par le Conseil sont sign&eacute;s soit par le Pr&eacute;sident du Conseil d&rsquo;Administration, soit par tout mandataire sp&eacute;cial de ce Conseil, agissant chacun dans la limite des pouvoirs &agrave; lui conf&eacute;r&eacute;s.</p>
                        <p>&nbsp;</p>
                        <p><strong>Titre Cinq</strong></p>
                        <p><strong>Commissaires aux comptes</strong></p>
                        <p><strong><u>Article 27 &ndash; Nomination &ndash; Pouvoirs</u></strong></p>
                        <p>L&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale Ordinaire d&eacute;signe un ou plusieurs commissaires aux comptes remplissant les conditions l&eacute;gales &nbsp;qui ont mandat de v&eacute;rifier les livres, la caisse, le portefeuille et les valeurs de la soci&eacute;t&eacute;, de contr&ocirc;ler la r&eacute;gularit&eacute; et la sinc&eacute;rit&eacute; des inventaires, ainsi que l&rsquo;exactitude des informations donn&eacute;es sur les comptes de la soci&eacute;t&eacute; dans le rapport du conseil d&rsquo;administration.</p>
                        <p>Les Commissaires aux Comptes sont nomm&eacute;s pour une p&eacute;riode de trois ann&eacute;es renouvelable.</p>
                        <p>La r&eacute;mun&eacute;ration des commissaires aux comptes est fix&eacute;e par l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale Ordinaire conform&eacute;ment au bar&egrave;me l&eacute;gal en &nbsp;vigueur.</p>
                        <p><strong>&nbsp;</strong></p>
                        <p><strong>Titre Six</strong></p>
                        <p><strong>Assembl&eacute;es G&eacute;n&eacute;rales</strong></p>
                        <p><strong><u>Article 28 &ndash; Dispositions communes aux assembl&eacute;es ordinaires et </u></strong></p>
                        <p><strong><u>Extraordinaires</u></strong></p>
                        <ul>
                            <li><em><u>Assembl&eacute;es Ordinaires et Extraordinaires</u></em></li>
                        </ul>
                        <p>L&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale, r&eacute;guli&egrave;rement constitu&eacute;e, repr&eacute;sente l&rsquo;universalit&eacute; des actionnaires. Elle se compose de tous les actionnaires, quel que soit le nombre de leurs actions. Elle peut avoir les pouvoirs, tout &agrave; la fois, d&rsquo;une assembl&eacute;e ordinaire et d&rsquo;une Assembl&eacute;e Extraordinaire, si elle r&eacute;unit les conditions n&eacute;cessaires.</p>
                        <p>Les d&eacute;lib&eacute;rations de l&rsquo;assembl&eacute;e, r&eacute;guli&egrave;rement prises obligent tous les actionnaires, m&ecirc;me les absents ou incapables.</p>
                        <p><strong>2- </strong><em><u>Convocation des assembl&eacute;es</u></em></p>
                        <p>Les actionnaires sont r&eacute;unis, chaque ann&eacute;e en Assembl&eacute;e G&eacute;n&eacute;rale Ordinaire par le Conseil d&rsquo;Administration, dans les six premiers mois qui suivent la cl&ocirc;ture de l&rsquo;exercice, aux jour, heure et lieu indiqu&eacute;s par l&rsquo;avis de convocation.</p>
                        <p>L&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale Ordinaire est convoqu&eacute;e par un avis publi&eacute; au Journal officiel de la r&eacute;publique Tunisienne et dans deux quotidiens dont l&rsquo;un en langue arabe, dans un d&eacute;lai de quinze (15) jours au moins avant la date fix&eacute;e pour la r&eacute;union.</p>
                        <p>Les Assembl&eacute;es G&eacute;n&eacute;rales Ordinaires peuvent &ecirc;tre convoqu&eacute;es extraordinairement par le Conseil d&rsquo;Administration.</p>
                        <p>En cas de n&eacute;cessit&eacute;, elles peuvent &ecirc;tre convoqu&eacute;es par&nbsp;:</p>
                        <ul>
                            <li>Le Commissaire aux Comptes,</li>
                            <li>un mandataire nomm&eacute; par le tribunal sur demande de tout int&eacute;ress&eacute; en cas d&rsquo;urgence ou &agrave; la demande d&rsquo;un ou plusieurs actionnaires d&eacute;tenant 5% du capital social,</li>
                            <li>Des actionnaires d&eacute;tenant la majorit&eacute; du capital social ou des droits de vote apr&egrave;s offre publique de vente ou d&rsquo;&eacute;change ou apr&egrave;s cession d&rsquo;un bloc de contr&ocirc;le,</li>
                            <li>Le liquidateur.</li>
                        </ul>
                        <p>&nbsp;Les Assembl&eacute;es G&eacute;n&eacute;rales Extraordinaires sont convoqu&eacute;es par&nbsp; un avis &eacute;crit adress&eacute; &agrave; chaque actionnaire par lettre recommand&eacute;e ou contre d&eacute;charge ou accus&eacute; de r&eacute;ception, dans un d&eacute;lai de quinze (15) jours au moins avant la date fix&eacute;e pour la r&eacute;union.</p>
                        <p>&nbsp;Toutefois, l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale Extraordinaire peut valablement se tenir sans d&eacute;lai si tous les actionnaires sont pr&eacute;sents ou repr&eacute;sent&eacute;s.</p>
                        <p>&nbsp;L&rsquo;avis de convocation doit &nbsp;indiquer la date et le lieu de la tenue de la r&eacute;union, ainsi que l&rsquo;ordre du jour.</p>
                        <p><strong>&nbsp;</strong></p>
                        <p><strong>3- </strong><em><u>Droit de si&eacute;ger &agrave; une Assembl&eacute;e G&eacute;n&eacute;rale</u></em></p>
                        <p>Les titulaires d&rsquo;actions lib&eacute;r&eacute;s des versements exigibles peuvent seuls assister &agrave; l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale sur justification de leur identit&eacute; ou s&rsquo;y faire repr&eacute;senter.</p>
                        <p>Les actionnaires ont la latitude de choisir leurs repr&eacute;sentants &agrave; l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale aussi bien parmi les actionnaires que les non actionnaires.</p>
                        <p>Toutefois les soci&eacute;t&eacute;s sont valablement repr&eacute;sent&eacute;es&nbsp; soit par un de leur g&eacute;rant ou par le Pr&eacute;sident Directeur G&eacute;n&eacute;ral ou le Directeur G&eacute;n&eacute;ral ou par un mandataire muni d&rsquo;un pouvoir r&eacute;gulier, sans qu&rsquo;il soit n&eacute;cessaire que ces personnes soient personnellement actionnaires.</p>
                        <p>La forme des pouvoirs et les lieux et d&eacute;lais de leur production sont d&eacute;termin&eacute;s par le Conseil d&rsquo;Administration.</p>
                        <p><strong>4- </strong><em><u>R&egrave;glement des Assembl&eacute;es G&eacute;n&eacute;rales</u></em></p>
                        <p>&nbsp;</p>
                        <p>L'Assembl&eacute;e G&eacute;n&eacute;rale est pr&eacute;sid&eacute;e par le Pr&eacute;sident ou, en son absence, par un Administrateur d&eacute;l&eacute;gu&eacute; sp&eacute;cialement &agrave; cet effet par le Conseil d'Administration.</p>
                        <p>&nbsp;</p>
                        <p>Le Pr&eacute;sident de l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale est assist&eacute; de deux scrutateurs et d&rsquo;un secr&eacute;taire, d&eacute;sign&eacute;s par les actionnaires pr&eacute;sents. Ils forment le bureau de l&rsquo;assembl&eacute;e.</p>
                        <p>&nbsp;</p>
                        <p>Il est tenu une feuille de pr&eacute;sence laquelle contient les noms et domiciles des actionnaires pr&eacute;sents ou repr&eacute;sent&eacute;s, et indique le nombre des actions poss&eacute;d&eacute;es par chacun d'eux et le droit de vote attribu&eacute; &agrave; chacun d&rsquo;eux. Cette feuille est sign&eacute;e par les actionnaires pr&eacute;sents ou leurs mandataires, et certifi&eacute;e par le bureau&nbsp;; elle est d&eacute;pos&eacute;e au si&egrave;ge social et doit &ecirc;tre communiqu&eacute;e &agrave; tout requ&eacute;rant.</p>
                        <p><u>&nbsp;</u></p>
                        <p><strong><em>5</em></strong><em>) <u>Ordre du jour de l'Assembl&eacute;e</u></em></p>
                        <p>&nbsp;</p>
                        <p>L'ordre du jour est arr&ecirc;t&eacute; par le Conseil d'Administration si la convocation est faite par lui ou par la personne qui a fait la convocation de l'Assembl&eacute;e.</p>
                        <p>&nbsp;</p>
                        <p>Il n&rsquo;est port&eacute; &agrave; l&rsquo;ordre du jour que les propositions &eacute;manant du Conseil d&rsquo;Administration, ou qui ont &eacute;t&eacute; communiqu&eacute;s au Conseil d&rsquo;Administration quinze jours au moins avant la convocation, au moyen de demandes rev&ecirc;tues de la signature des actionnaires repr&eacute;sentant au minimum 5% du capital social</p>
                        <p>&nbsp;</p>
                        <p>Aucune proposition ne peut &ecirc;tre soumise &agrave; l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale si elle ne figure pas &agrave; son ordre du jour.</p>
                        <p><u>&nbsp;</u></p>
                        <p><strong><em>6</em></strong><em>) <u>Droit de vote de l'Assembl&eacute;e G&eacute;n&eacute;rale</u></em></p>
                        <p>&nbsp;</p>
                        <p>Chaque membre de l'Assembl&eacute;e G&eacute;n&eacute;rale a autant de voix qu'il poss&egrave;de et repr&eacute;sente d'actions.</p>
                        <p>&nbsp;</p>
                        <p>Aucun actionnaire ne peut voter, &agrave; titre personnel ou par procuration, lorsqu&rsquo;il s&rsquo;agit d&rsquo;une d&eacute;cision lui attribuant un avantage personnel ou de statuer sur un diff&eacute;rend entre lui et la Soci&eacute;t&eacute;.</p>
                        <p>&nbsp;</p>
                        <p><strong><em>7</em></strong><em>) <u>Proc&egrave;s -Verbal de l'Assembl&eacute;e G&eacute;n&eacute;rale</u></em></p>
                        <p>&nbsp;</p>
                        <p>Les d&eacute;lib&eacute;rations de l'Assembl&eacute;e G&eacute;n&eacute;rale sont constat&eacute;es par des proc&egrave;s verbaux inscrits ou annex&eacute;s sur un registre sp&eacute;cial et sign&eacute;s par les membres composant le bureau ou tout au moins par la majorit&eacute; d'entre eux.</p>
                        <p>&nbsp;</p>
                        <p>Le proc&egrave;s verbal doit contenir les &eacute;nonciations suivantes&nbsp;:</p>
                        <ul>
                            <li>la date et le lieu de la tenue de l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale,</li>
                            <li>le mode de convocation,</li>
                            <li>l&rsquo;ordre du jour,</li>
                            <li>la composition du bureau de l&rsquo;Assembl&eacute;e,</li>
                            <li>le nombre d&rsquo;actions participant au vote et le quorum atteint,</li>
                            <li>les documents et les rapports soumis &agrave; l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale,</li>
                            <li>un r&eacute;sum&eacute; des d&eacute;bats, le texte des r&eacute;solutions soumises et son r&eacute;sultat.</li>
                        </ul>
                        <p>Ce proc&egrave;s verbal est sign&eacute; par les membres du bureau et le refus de l&rsquo;un d&rsquo;entre eux doit &ecirc;tre mentionn&eacute;.</p>
                        <h4><strong>&nbsp;</strong></h4>
                        <h4><strong>Article 29 : Assembl&eacute;es G&eacute;n&eacute;rales Ordinaires &ndash; Assembl&eacute;es G&eacute;n&eacute;rales Extraordinaires</strong></h4>
                        <p><strong>&nbsp;</strong></p>
                        <p><em>1) <u>Assembl&eacute;es G&eacute;n&eacute;rales Ordinaires</u></em></p>
                        <p><strong>&nbsp;</strong></p>
                        <ol>
                            <li><em>a) Constitution de l'Assembl&eacute;e G&eacute;n&eacute;rale Ordinaire</em></li>
                        </ol>
                        <p><strong><u>&nbsp;</u></strong></p>
                        <p>Les Assembl&eacute;es G&eacute;n&eacute;rales Ordinaires (annuelles ou convoqu&eacute;es extraordinairement) se composent de tous les actionnaires, quel que soit le nombre de leurs actions, pourvu qu'elles aient &eacute;t&eacute; lib&eacute;r&eacute;es des versements exigibles.</p>
                        <p>&nbsp;</p>
                        <p>Pour d&eacute;lib&eacute;rer valablement, l'Assembl&eacute;e G&eacute;n&eacute;rale Ordinaire doit &ecirc;tre compos&eacute;e d'un nombre d'actionnaires repr&eacute;sentant les deux tiers au moins du capital social apr&egrave;s d&eacute;duction, s'il y a lieu, de la valeur nominale des actions priv&eacute;es du droit de vote, en vertu des dispositions l&eacute;gislatives ou r&eacute;glementaires.</p>
                        <p>&nbsp;</p>
                        <p>Si ce quorum n&rsquo;est pas atteint, l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale est convoqu&eacute;e &agrave; nouveau sans qu&rsquo;aucun quorum ne soit requis.</p>
                        <p>&nbsp;</p>
                        <p>Les r&eacute;solutions de l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale Ordinaire sont prises &agrave; la majorit&eacute; des voix des actionnaires pr&eacute;sents ou repr&eacute;sent&eacute;s.</p>
                        <p><u>&nbsp;</u></p>
                        <ol>
                            <li><em>b) Pouvoirs de l'Assembl&eacute;e G&eacute;n&eacute;rale Ordinaire</em></li>
                        </ol>
                        <p>&nbsp;</p>
                        <p>Les Assembl&eacute;es G&eacute;n&eacute;rales Ordinaires ont &agrave; statuer sur toutes les questions qui exc&egrave;dent la comp&eacute;tence du Conseil d'Administration.</p>
                        <p>&nbsp;</p>
                        <p>Elles conf&egrave;rent &agrave; ce dernier les autorisations n&eacute;cessaires pour tous les cas o&ugrave; les pouvoirs &agrave; lui attribuer seraient insuffisants. D'une mani&egrave;re g&eacute;n&eacute;rale, elles r&egrave;glent les conditions du mandat imparti au Conseil d&rsquo;Administration et elles d&eacute;terminent souverainement la conduite des affaires de la soci&eacute;t&eacute;</p>
                        <p><em>&nbsp;</em></p>
                        <p><em>2) <u>Assembl&eacute;es G&eacute;n&eacute;rales Extraordinaires</u></em></p>
                        <p><strong>&nbsp;</strong></p>
                        <p><em>a)Constitution de l'Assembl&eacute;e G&eacute;n&eacute;rale Extraordinaire</em></p>
                        <p>&nbsp;</p>
                        <p>&nbsp;L'Assembl&eacute;e G&eacute;n&eacute;rale Extraordinaire se compose de tous les actionnaires quel que soit le nombre de leurs actions, pourvu que ces derni&egrave;res aient &eacute;t&eacute; lib&eacute;r&eacute;es des versements exigibles.</p>
                        <p>&nbsp;</p>
                        <p>Les r&eacute;solutions de l'Assembl&eacute;e G&eacute;n&eacute;rale Extraordinaire sont prises &agrave; la majorit&eacute; des deux tiers des voix des membres pr&eacute;sents ou repr&eacute;sent&eacute;s.</p>
                        <p>Pr&eacute;alablement &agrave; l'Assembl&eacute;e G&eacute;n&eacute;rale Extraordinaire r&eacute;unie sur premi&egrave;re convocation, le texte des r&eacute;solutions propos&eacute;es doit &ecirc;tre tenu au si&egrave;ge de la soci&eacute;t&eacute; &agrave; la disposition des actionnaires, quinze jours au moins avant la date de la r&eacute;union.</p>
                        <p><em>&nbsp;</em></p>
                        <ol>
                            <li><em>b) Pouvoirs de l'Assembl&eacute;e G&eacute;n&eacute;rale Extraordinaire</em></li>
                        </ol>
                        <p>&nbsp;</p>
                        <p>L'Assembl&eacute;e G&eacute;n&eacute;rale Extraordinaire peut, sur la proposition du Conseil d&rsquo;Administration et dans le cadre de la l&eacute;gislation et de la r&eacute;glementation des soci&eacute;t&eacute;s anonymes, apporter aux statuts toutes modifications quelles qu'elles soient.</p>
                        <p>Toutefois, lorsque la modification est effectu&eacute;e en application de dispositions l&eacute;gales ou r&eacute;glementaires qui la prescrivent, les statuts peuvent &ecirc;tre modifi&eacute;s par le Directeur G&eacute;n&eacute;ral. Les statuts sont soumis dans leur version modifi&eacute;e &agrave; l&rsquo;approbation de la premi&egrave;re Assembl&eacute;e G&eacute;n&eacute;rale Extraordinaire suivante.</p>
                        <p><em>&nbsp;</em></p>
                        <ol>
                            <li><em>c) Quorum</em></li>
                        </ol>
                        <p>&nbsp;</p>
                        <p>Les Assembl&eacute;es G&eacute;n&eacute;rales Constitutives et Extraordinaires ne sont r&eacute;guli&egrave;rement constitu&eacute;es et ne d&eacute;lib&egrave;rent valablement qu'autant qu'elles sont compos&eacute;es d'actions groupant, au moins, les deux tiers &nbsp;du capital social.</p>
                        <p>&nbsp;</p>
                        <p>Si la premi&egrave;re Assembl&eacute;e n'a pas r&eacute;uni les deux tiers (2/3) du capital social, une nouvelle assembl&eacute;e peut &ecirc;tre convoqu&eacute;e dans les formes statutaires.</p>
                        <p>&nbsp;</p>
                        <p>Cette convocation reproduit l'ordre du jour, la date et le r&eacute;sultat de la pr&eacute;c&eacute;dente Assembl&eacute;e.</p>
                        <p>&nbsp;</p>
                        <p>La seconde Assembl&eacute;e ne peut se tenir que dix jours au plus tard apr&egrave;s la date de la convocation et avoir un quorum de la moiti&eacute; (1/2) du capital.</p>
                        <p>&nbsp;</p>
                        <p>A d&eacute;faut de ce quorum une troisi&egrave;me Assembl&eacute;e est convoqu&eacute;e dans les formes statutaires dans un d&eacute;lai d&rsquo;un mois &agrave; compter de la date de convocation de la deuxi&egrave;me Assembl&eacute;e avec un quorum du tiers du capital social.</p>
                        <p>&nbsp;</p>
                        <p>A d&eacute;faut de ce dernier quorum le d&eacute;lai de la tenue de l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale peut &ecirc;tre prorog&eacute; &agrave; une date post&eacute;rieure ne d&eacute;passant pas deux mois &agrave; partir de la date de la convocation.</p>
                        <p>&nbsp;</p>
                        <p>Dans toutes les Assembl&eacute;es G&eacute;n&eacute;rales, le quorum n'est calcul&eacute; qu'apr&egrave;s d&eacute;duction des actions priv&eacute;es du droit de vote, en vertu des dispositions l&eacute;gislatives ou r&eacute;glementaires, et notamment lorsqu'il s'agit d'assembl&eacute;es &agrave; caract&egrave;re constitutif des actions appartenant &agrave; des personnes qui ont fait l'apport ou stipul&eacute; des avantages particuliers soumis &agrave; l'appr&eacute;ciation de l'assembl&eacute;e.</p>
                        <p>&nbsp;</p>
                        <p>Cette assembl&eacute;e sera convoqu&eacute;e, compos&eacute;e, et d&eacute;lib&eacute;rera dans les conditions applicables aux Assembl&eacute;es G&eacute;n&eacute;rales Extraordinaires.</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <h6><strong>Titre sept</strong></h6>
                        <p><strong><u>&nbsp;</u></strong></p>
                        <p>Bilan social et r&eacute;partition des b&eacute;n&eacute;fices</p>
                        <p><strong>&nbsp;</strong></p>
                        <p><strong><u>Article 30 : Exercice social </u></strong></p>
                        <p>L'exercice social commence le 1<sup>er</sup> novembre et finit le 31 octobre.</p>
                        <h4><strong>&nbsp;</strong></h4>
                        <h4><strong>Article 31 : Etats Financiers et Rapport du Conseil</strong></h4>
                        <p>A la cl&ocirc;ture de chaque exercice, le conseil d&rsquo;administration &eacute;tablit, sous sa responsabilit&eacute;, les &eacute;tats financiers conform&eacute;ment &agrave; la loi relative au syst&egrave;me comptable des entreprises.</p>
                        <p>&nbsp;</p>
                        <p>Les &eacute;tats financiers doivent &ecirc;tre &eacute;tablis chaque ann&eacute;e dans la m&ecirc;me forme que les ann&eacute;es pr&eacute;c&eacute;dentes et les m&eacute;thodes d&rsquo;&eacute;valuation des divers postes doivent &ecirc;tre immuables, &agrave; moins que l&rsquo;assembl&eacute;e g&eacute;n&eacute;rale ordinaire, apr&egrave;s avoir pris connaissance des motifs expos&eacute;s dans le rapport dress&eacute; par le ou les commissaires aux comptes, n&rsquo;approuve express&eacute;ment chacune des modifications apport&eacute;es soit aux modes de pr&eacute;sentations des chiffres, soit aux m&eacute;thodes d&rsquo;&eacute;valuation.</p>
                        <p>&nbsp;</p>
                        <p>Le conseil d&rsquo;administration doit, conjointement aux documents comptables, pr&eacute;senter &agrave; l&rsquo;assembl&eacute;e g&eacute;n&eacute;rale un rapport annuel d&eacute;taill&eacute; sur la gestion de la soci&eacute;t&eacute;.</p>
                        <p>&nbsp;</p>
                        <h4><strong>&nbsp;</strong></h4>
                        <h4><strong>Article 32 : Droit de communication des actionnaires- Questions &eacute;crites</strong></h4>
                        <p>&nbsp;</p>
                        <p><strong>32-1&nbsp;:</strong>&nbsp; <strong>Droit de communication&nbsp;:</strong> Pendant les quinze jours pr&eacute;c&eacute;dents la r&eacute;union de l'Assembl&eacute;e g&eacute;n&eacute;rale ordinaire, l'inventaire, les &eacute;tats financiers ainsi que tous les documents qui, d&rsquo;apr&egrave;s la loi, doivent &ecirc;tre communiqu&eacute;s &agrave; cette Assembl&eacute;e, et la liste des actionnaires, sont tenus au si&egrave;ge social &agrave; la disposition des actionnaires.</p>
                        <p>&nbsp;</p>
                        <p>Tout actionnaire d&eacute;tenant au moins cinq pour cent (5%) du capital social ou d&eacute;tenant une participation au capital au moins &eacute;gale &agrave; un million (1.000.000) de dinars, a le droit d&rsquo;obtenir, &agrave; tout moment, des copies des documents sociaux qui concernent les trois derniers exercices ainsi qu&rsquo;une copie des proc&egrave;s-verbaux, feuilles de pr&eacute;sence des assembl&eacute;es tenues au cours des trois derniers exercices. Des actionnaires r&eacute;unis d&eacute;tenant cette fraction du capital ont le droit de se faire communiquer les documents cit&eacute;s et de se faire repr&eacute;senter par un mandataire pour exercer ce droit en leur nom.</p>
                        <h4><strong>&nbsp;</strong></h4>
                        <p><strong>32-2&nbsp;: Questions &eacute;crites&nbsp;: </strong>tout actionnaire ou actionnaires d&eacute;tenant au moins cinq pour cent (5%) du capital social ou d&eacute;tenant une participation au capital d&rsquo;une valeur au moins &eacute;gale &agrave; un million (1.000.000) de dinars, sans &ecirc;tre membre du Conseil d&rsquo;Administration, peuvent poser au Conseil d&rsquo;Administration, au moins deux fois par ann&eacute;e, des questions &eacute;crites au sujet de tout acte ou fait suscptible de mettre en p&eacute;ril les int&eacute;r&ecirc;ts de la soci&eacute;t&eacute;.</p>
                        <p>Le Conseil d&rsquo;Administration doit r&eacute;pondre par &eacute;crit dans le mois qui suit la r&eacute;ception de la question. Une copie de la question et de la r&eacute;ponse sont obligatoirement communiqu&eacute;es au Commissaire aux Comptes. Ces documents sont mis &agrave; la disposition des actionnaires &agrave; l&rsquo;occasion de la premi&egrave;re Assembl&eacute;e G&eacute;n&eacute;rale suivante.</p>
                        <p><strong>&nbsp;</strong></p>
                        <h4><strong>Article 33 : Affectation et r&eacute;partition des b&eacute;n&eacute;fices</strong></h4>
                        <p>Les b&eacute;n&eacute;fices nets s'entendent des produits nets de l'exercice, d&eacute;duction faite des frais g&eacute;n&eacute;raux et autres charges sociales ainsi que tous amortissements de l'actif social et de toutes provisions pour risques commerciaux ou industriels.</p>
                        <p>Le b&eacute;n&eacute;fice distribuable est constitu&eacute; du r&eacute;sultat comptable net major&eacute; ou minor&eacute; des r&eacute;sultats report&eacute;s des exercices ant&eacute;rieurs, et ce, apr&egrave;s d&eacute;duction de ce qui suit&nbsp;:</p>
                        <p>&nbsp;</p>
                        <p><strong>1)</strong> &nbsp;&nbsp;&nbsp;&nbsp; Cinq pour cent (5%) pour constituer la r&eacute;serve l&eacute;gale jusqu'&agrave; ce que cette r&eacute;serve ait atteint le dixi&egrave;me (1/10<sup>e</sup>) du capital social.</p>
                        <p>&nbsp;</p>
                        <p><strong>2)</strong>&nbsp; &nbsp;&nbsp;&nbsp; L'Assembl&eacute;e G&eacute;n&eacute;rale Ordinaire pourra toujours, sur la proposition du Conseil d'Administration, reporter &agrave; nouveau, sur l'exercice suivant, tout ou partie du solde des b&eacute;n&eacute;fices, soit pour des amortissements suppl&eacute;mentaires de l&rsquo;actif, soit pour constituer un ou plusieurs fonds de r&eacute;serve extraordinaires dont l'emploi et l'affectation seront d&eacute;termin&eacute;s par l'Assembl&eacute;e G&eacute;n&eacute;rale.</p>
                        <p>&nbsp;</p>
                        <h2><strong>3) </strong>Pour le solde &eacute;ventuel, l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale ordinaire est souveraine pour le r&eacute;partir &agrave; titre de dividende ou d&eacute;cider le report &agrave; nouveau.</h2>
                        <h2>&nbsp;</h2>
                        <h2>&nbsp;</h2>
                        <h2><strong>Titre huit</strong></h2>
                        <p><strong>&nbsp;</strong></p>
                        <h2><strong>Dissolution - Liquidation</strong></h2>
                        <p><strong>&nbsp;</strong></p>
                        <h4><strong>Article 34 :&nbsp; Dissolution anticip&eacute;e</strong></h4>
                        <p>La soci&eacute;t&eacute; peut &ecirc;tre dissoute lorsque ses fonds propres se trouvent &ecirc;tre inf&eacute;rieurs &agrave; la moiti&eacute; de son capital social suite aux pertes constat&eacute;es dans ses documents comptables.</p>
                        <p>&nbsp;</p>
                        <p>Dans ce cas le Conseil d&rsquo;Administration de la soci&eacute;t&eacute; est tenu de convoquer l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale d&eacute;lib&eacute;rant aux conditions pr&eacute;vues par les statuts pour d&eacute;cider de la dissolution de la soci&eacute;t&eacute; ou de sa continuation avec r&eacute;gularisation de sa situation, et ce, sous r&eacute;serve du respect des dispositions de la loi relative au redressement des entreprises en difficult&eacute;s &eacute;conomiques.</p>
                        <p>En dehors du cas pr&eacute;vu ci-dessus, le Conseil d&rsquo;Administration peut proposer &agrave; l&rsquo;Assembl&eacute;e G&eacute;n&eacute;rale Extraordinaire, de dissoudre la soci&eacute;t&eacute; par anticipation.</p>
                        <p>&nbsp;</p>
                        <h4><strong>Article 35 : Liquidation</strong></h4>
                        <p>A l'expiration du terme fix&eacute; par les statuts ou en cas de dissolution anticip&eacute;e pour quelque cause que ce soit, l'Assembl&eacute;e G&eacute;n&eacute;rale r&egrave;gle, sur la proposition du Conseil d`Administration, le mode de liquidation et nomme un ou plusieurs liquidateurs dont elle d&eacute;termine les pouvoirs.</p>
                        <p>Cette nomination met fin aux pouvoirs des administrateurs.</p>
                        <p>Le produit de la liquidation, apr&egrave;s r&egrave;glement du passif et des charges de la Soci&eacute;t&eacute; est employ&eacute; &agrave; amortir compl&egrave;tement le capital des actions, le surplus est r&eacute;parti entre les actionnaires.</p>
                        <h2><strong>&nbsp;</strong></h2>
                        <h2><strong>Titre neuf</strong></h2>
                        <p><strong><u>&nbsp;</u></strong></p>
                        <p><strong><u>Contestations</u></strong></p>
                        <p><strong>&nbsp;</strong></p>
                        <h4><strong>Article 36 : Comp&eacute;tence - Election de domicile</strong></h4>
                        <p>Toutes contestations qui peuvent s&rsquo;&eacute;lever pendant le cours de la soci&eacute;t&eacute; ou de sa liquidation, soit entre les actionnaires et la soci&eacute;t&eacute;, soit entre les actionnaires eux-m&ecirc;mes, au sujet des affaires sociales, sont soumises &agrave; la juridiction des tribunaux comp&eacute;tents du lieu du si&egrave;ge social.</p>
                        <p>&nbsp;</p>
                        <h1>A cet effet, en cas de contestation, tout actionnaire doit faire &eacute;lection de domicile dans le ressort du si&egrave;ge social et toute assignation et signification seront valablement faites au parquet du tribunal du si&egrave;ge social.</h1>
                        <p>&nbsp;</p>
                        <h1><strong>Article 37&nbsp;: Publications</strong></h1>
                        <p>Pour faire publier les pr&eacute;sents statuts, tous actes et d&eacute;lib&eacute;rations ult&eacute;rieurs, tous pouvoirs sont donn&eacute;s au porteur d'un original, d'une exp&eacute;dition ou copie d'un extrait de ces documents.</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p><strong>Fait&nbsp; &agrave; Tunis, le {date}</strong></p>
                        <p><strong>&nbsp;</strong></p>
                        <p><strong>&nbsp;</strong></p>
                        <p><strong>Le Pr&eacute;sident du Conseil d&rsquo;Administration&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Le Directeur G&eacute;n&eacute;ral</strong></p>
                        <p><strong>&nbsp;</strong></p>
                        <p><strong>&nbsp;</strong></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
