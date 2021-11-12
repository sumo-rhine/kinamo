import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Typography, Box, Link } from "@mui/material";

const Impressum = () => {
  return (
    <Box>
      <Header cityName="wähle deine Kommune"></Header>
      <Box ml={10}>
        <h4>Provider</h4>
        <p>
          Provider of services in the sense of Art. 5 of the State Agreement on
          Media Services and Art. 55 of the German Act on Teleservices
        </p>
        <p>Karlsruhe Institute of Technology (KIT)</p>
        <p>Kaiserstraße 12</p>
        <p>76131 Karlsruhe</p>
        <p>Germany</p>
        <p>Phone: +49 721 608-0</p>
        <p>Fax: +49 721 608-44290</p>
        <p>E-mail: info@kit.edu</p>
        <p>
          The Karlsruhe Institute of Technology is a corporation governed by
          public law, represented by its president Prof. Dr.-Ing. Holger
          Hanselka.
        </p>
        <p>French-German Institute for Environmental Research (DFIU)</p>
        <p>M. A. Kira Schumacher</p>
        <p>
          KIT-Campus West
          <br />
          Hertzstr. 16 – Gebäude 06.33
          <br />
          D-76187 Karlsruhe
        </p>
        <p>
          Telefon: +49 (0)721 608 44572
          <br />
          Telefax: +49 (0)721 608 44682
          <br />
          E-Mail: <a>kira.schumacher@kit.edu</a>
          <br />
          Web: <a href="http://www.dfiu.kit.edu/">www.dfiu.kit.edu</a>
        </p>
        <h4>Copyright</h4>
        <p>
          For the internet pages of Karlsruhe Institute of Technology, the
          copyright and all other rights lie with the Karlsruhe Institute of
          Technology, Kaiserstraße 12, 76131 Karlsruhe, Germany. Further
          dissemination, also in parts, for pedagogic, scientific or private
          purposes is allowed, provided that the source is indicated (unless
          otherwise expressly stated on the respective page). Use for commercial
          purposes shall require the approval by the Karlsruhe Institute of
          Technology. Contact the{" "}
          <a href="mailto:info@kit.edu">
            Strategic Corporate Development and Communications Department
          </a>
          .
        </p>
        <h4>Disclaimer</h4>
        <p>
          These internet pages serve for information only. Their contents were
          compiled with due diligence. However, Karlsruhe Institute of
          Technology shall not assume any liability, neither expressly nor
          implied, for the type or correctness of the material offered and shall
          not be liable (including liability for indirect loss or loss of
          profit) for the material or use of this material. In case contents of
          websites of the Karlsruhe Institute of Technology violate valid legal
          regulations, we kindly ask you to inform us immediately. We will then
          remove the site or the respective contents as quickly as possible.
        </p>
        <h4>References to External Websites</h4>
        <p>
          The websites of Karlsruhe Institute of Technology contain links to
          information offered by servers which are not subject to the control
          and responsibility of the Karlsruhe Institute of Technology. Karlsruhe
          Institute of Technology shall not assume any responsibility or
          guarantee for this information and shall not approve of or support
          such information in terms of contents.
        </p>
        <h4>Data Protection and IT Safety</h4>
        <p>
          If you have further questions with respect to our data protection
          standards or if you wish to consult our public procedures register,
          please contact our{" "}
          <a href="mailto:datenschutzbeauftragter@kit.edu">
            Data Protection Commissioner
          </a>
          . In case you wish to inform yourself about the concepts and technical
          implementation of our IT safety, do not hesitate to contact our{" "}
          <a href="mailto:it-sicherheitsbeauftragter@kit.edu">
            IT Safety Commissioner
          </a>
          .
        </p>
      </Box>
    </Box>
  );
};

export default Impressum;
