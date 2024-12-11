
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const texts : any = {
    en: {
      introText: `The Estaleiro Atlantico do Amboim (EAA), is a shipyard and energy industry in Angola. The manufacturing yard is located at Praia do Kissonde, Porto Amboim, Kwanza-Sul, Angola. Specializes in the construction of underwater structures and the manufacture of support equipment for the oil and gas industry.`,
      yardUtilitiesText: `
        <ul>
          <li>Offices (1050 m2)</li>
          <li>Restaurant (300 seats)</li>
          <li>Own satellite connection</li>
          <li>Fuel storage (60m3)</li>
          <li>Fuel purification unit</li>
          <li>E-power plant (8mW)</li>
          <li>2x RO-water plant (160m3/d)</li>
          <li>Anaerobe sewer treatment plant</li>
          <li>Medical facilities with yard hospital (2 beds)</li>
          <li>Ambulance</li>
          <li>Fire fighting truck</li>
          <li>EAATC (Estaleiro Atlântico do Amboim Training Centre) capacity 40 trainees</li>
          <li>EAASC (Estaleiro Atlântico do Amboim Safety Centre) capacity 16 trainees</li>
          <li>Maintenance building</li>
          <li>Car wash area with oil/water separator</li>
        </ul>
      `,
      ourYardText: `
        <ul>
          <li>150.000 m2 (15 ha), loadbearing 90 t/m2</li>
          <li>Direct access to open sea</li>
          <li>Quay 250m, 10.6m water depth</li>
          <li>Quay load 5 t/m2 - 10 t/m2</li>
          <li>Breakwater protection</li>
          <li>Connected by road transport to Luanda</li>
        </ul>
      `,
      missionVisionText: `The Vision, Values and Mission of EAA, LDA materialize the company's ambition to be a reference in society, contributing decisively to the development of the oil sector and other markets.`,
      visionText: `<p>To be recognized for excellence, quality, and rigor in the projects carried out and for the fulfillment of Social Responsibilities.</p>`,
      valuesText: `
        <p><b>Human</b></p>
        <p>Respect, Integrity, Loyalty, Discretion, Receptiveness, Ambition, and Dedication;</p>
        <p><b>Social</b></p>
        <p>Ethics, Responsibility, Solidarity, and Culture Development;</p>
        <p><b>Business</b></p>
        <p>Rigor, Competence, Professionalism, Efficiency, Innovation, and Transparency.</p>
      `,
      missionText: `<p>Deliver projects safely, with quality, on time, and on budget.</p>`
    },
    pt: {
      introText: `O Estaleiro Atlântico do Amboim (EAA) é um estaleiro e indústria de energia em Angola. O estaleiro está localizado na Praia do Kissonde, Porto Amboim, Kwanza-Sul, Angola. Especializa-se na construção de estruturas submersas e na fabricação de equipamentos de suporte para a indústria de petróleo e gás.`,
      yardUtilitiesText: `
        <ul>
          <li>Escritórios (1050 m2)</li>
          <li>Restaurante (300 lugares)</li>
          <li>Conexão própria via satélite</li>
          <li>Armazenamento de combustível (60m3)</li>
          <li>Unidade de purificação de combustível</li>
          <li>Central elétrica (8mW)</li>
          <li>2x estação de água RO (160m3/d)</li>
          <li>Estação de tratamento anaeróbico de esgoto</li>
          <li>Instalações médicas com hospital do estaleiro (2 camas)</li>
          <li>Ambulância</li>
          <li>Carro de combate a incêndios</li>
          <li>EAATC (Centro de Formação do Estaleiro Atlântico do Amboim) capacidade para 40 formandos</li>
          <li>EAASC (Centro de Segurança do Estaleiro Atlântico do Amboim) capacidade para 16 formandos</li>
          <li>Edifício de manutenção</li>
          <li>Área de lavagem de carros com separador óleo/água</li>
        </ul>
      `,
      ourYardText: `
        <ul>
          <li>150.000 m2 (15 ha), capacidade de carga 90 t/m2</li>
          <li>Acesso direto ao mar aberto</li>
          <li>Cais de 250m, profundidade de água de 10.6m</li>
          <li>Carga do cais 5 t/m2 - 10 t/m2</li>
          <li>Proteção por quebra-mar</li>
          <li>Conectado por transporte rodoviário a Luanda</li>
        </ul>
      `,
      missionVisionText: `A Visão, Valores e Missão da EAA, LDA materializam a ambição da empresa em ser uma referência na sociedade, contribuindo decisivamente para o desenvolvimento do setor petrolífero e outros mercados.`,
      visionText: `<p>Ser reconhecida pela excelência, qualidade e rigor nos projetos realizados e pelo cumprimento das Responsabilidades Sociais.</p>`,
      valuesText: `
        <p><b>Humano</b></p>
        <p>Respeito, Integridade, Lealdade, Discrição, Recetividade, Ambição e Dedicação;</p>
        <p><b>Social</b></p>
        <p>Ética, Responsabilidade, Solidariedade e Desenvolvimento Cultural;</p>
        <p><b>Negócios</b></p>
        <p>Rigor, Competência, Profissionalismo, Eficiência, Inovação e Transparência.</p>
      `,
      missionText: `<p>Realizar projetos com segurança, qualidade, no prazo e dentro do orçamento.</p>`
    }
  };

  const lang = req.query.lang as string; // Explicitly cast query parameter to string
  const data = texts[lang] || texts.en; // Default to English if language is not found
  res.status(200).json(data);
}
