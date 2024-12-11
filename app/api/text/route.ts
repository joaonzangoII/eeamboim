
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const texts: any = {
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
            missionText: `<p>Deliver projects safely, with quality, on time, and on budget.</p>`,

            OurTechnologyIntroTexto: `
            In our yard, state of art technologies are utilized for
            manufacturing support. Specific design and drawing
            software, as well as Matrix for material traceability and Primavera for planning, are
            combined with modules developed in-house for a bespoke
            fit to all our projects and requirements
            `,
            introTextOurServices: `
            We have strived to meet our clients demands by delivering<br />
            our projects at the highest quality, and<br />
            through our ability to design and manufacture all kinds of<br />
            tailor-made steel tool structures. <br />
            Our yard used to provide the following services:
            `,
            services: [
                "Design and Engineering of offshore structures",
                "Procurement and Logistics for offshore structures",
                "Fabrication of offshore structure",
                "Installation and commissioning of offshore in shallow water"
            ],
            services2: [
                "Maintenance and repairment of Rigs, Vessels, as well as drawing and tests (as required for certification).",
                "Providing specialized and certified manpower Welds, fabrication operators and riggers.",
                "Logistics and storage services, taking advantage of our 250m quay length with 10.6m water depth."
            ],
            installationUtilities: `
            Structural fabrication area of 180x32m of which Covered (130x32m).<br />
            Outside fabrication area 210x120m
            3 overhead cranes (32/8mt) 10m hook height<br />
            Utility area (100x10m)
            PIP facility
            Multi jointing facility
            Dedicated area for Blasting and painting
            `,
            productionEquipmentIntro: `
            SMAW welding equipment (22 pc) <br />
            FCAW welding equipment (25pc)<br />
            GTAW welding equipment (30pc) <br />
            SAW welding equipment (8pc) <br />
            Welding rollers (16 pc 100mt load <br />
            capacity each. 200mT load <br />
            capacity/set) <br />
            CNC plate cutter (3x12m) <br />
            CNC profiler (round tubular)<br />
            CNC profiler (beams) <br />
            Rolling machine (3000mm wide,<br />
            72mm thick in St355) upper roll <br />
            790mm<br />
            Vacuum Blasting machines <br />
            Fabrication stands for spools<br />
            fabrication
            `,
            logisticEquipmentIntro: `
            <ul className="shallow-list">
            <li className="shallow-list-item">1 Liebheer crawler crane (750mt)</li>
            <li className="shallow-list-item">1 Liebheer crawler crane (400mt)</li>
            <li className="shallow-list-item">1 Terex (63mt)</li>
            </ul>
            `,
            QcEquipmentTitle: `Qc Equipment`,
            QcEquipmentIntro: `
            <p>
            Calibrated measuring tools (wide<br />
            range, length, temperature, pressure) <br />
            Weighing equipment <br />
            Dimensional control (2x) 3D scanners <br />
            Paint inspection equipment <br />
            NDE equipment <br />
            High pressure Hydrotesting <br />
            equipment
            </p>
            `,
            qualityHealthSafetyAndEnvironmentalcareIntroText: `
            Estaleiro Atlântico do Amboim operates an integrated <br />
            management system incorporating <br />
            Quality, Safety, Health and environmental care which is guided <br />
            by the ISO 9001:2008 Code <br />
            for Quality management, and IMO’s ISM Code for safety and <br />
            environmental management. <br />
            We are committed to providing a healthy and safe working <br />
            environment and, as such, we apply a set of effective <br />
            measurement tools on the yard aimed at.
            `,
            ManpowerAndTrainingText: `
            We have a training school where fabricators and <br />
            welders are trained and qualified. The training includes <br />
            the following welding processes <br />
            <br />
            SMAW <br />
            FCAW <br />
            GTAW <br />
            SAW <br />
            <br />
            Our training program extends to other specific <br />
            disciplines such as scaffold, machine operators, Cranes <br />
            operators, Safety training, First Aid, Inspection <br />
            training, English, Excel, Matrix, Drawing Software, <br />
            Injury <br />
            incident free (IFF), Fire Fighting among others.<br />
            We also collaborate with local universities and <br />
            institutes, delivering workshops and presentations, <br />
            with the <br />
            aim of hunting local talents
            `,
            ShallowWaterFieldsTitle: `Shallow water fields`,
            ShallowWaterFieldsIntro: `
            <ul className="col-md-4">
            <li className="shallow-list-item">Piles </li>
            <li className="shallow-list-item">Jackets </li>
            <li className="shallow-list-item">Small topside modules </li>
            <li className="shallow-list-item">Grillages </li>
            <li className="shallow-list-item">Seafastening</li>
            </ul>
            `,
            DeepWaterFieldsTitle: `Deep water fields`,
            DeepWaterFieldsIntro: `
            <ul>
            <li className="shallow-list">Suction Piles </li>
            <li className="shallow-list">Buoyancy tanks </li>
            <li className="shallow-list">In-field flow lines </li>
            <li className="shallow-list">Risers </li>
            <li className="shallow-list">In line structures LRAs, URAs, FLETs, PLETs </li>
            <li className="shallow-list">Manifolds </li>
            <li className="shallow-list">Other subsea structures </li>
            <li className="shallow-list">and several kinds of flow </li>
            <li className="shallow-list">lines taking advantage of </li>
            <li className="shallow-list">our pipe-in pipe and multi </li>
            <li className="shallow-list">jointing facilities. </li>
            </ul>
            `
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
            missionText: `<p>Realizar projetos com segurança, qualidade, no prazo e dentro do orçamento.</p>`,
            OurTechnologyIntroTexto: `
            No nosso estaleiro, utilizam-se tecnologias de ponta para o
            suporte à manufatura. Software específico de design e desenho,
            bem como o Matrix para rastreabilidade de materiais e o Primavera
            para planeamento, são combinados com módulos desenvolvidos internamente
            para um ajuste personalizado a todos os nossos
            projetos e requisitos.
            `,
            introTextOurServices: `
            Esforçamo-nos para atender às demandas dos nossos clientes,
            entregando nossos projetos com a mais alta qualidade, e
            através da nossa capacidade de projetar e fabricar todo tipo de
            estruturas de ferramentas de aço sob medida. <br />
            Nosso estaleiro oferecia os seguintes serviços:
            `,
            services: [
                "Design e Engenharia de estruturas offshore",
                "Aprovisionamento e Logística para estruturas offshore",
                "Fabricação de estruturas offshore",
                "Instalação e comissionamento de estruturas offshore em águas rasas"
            ],
            services2: [
                "Manutenção e reparação de plataformas, embarcações, bem como desenho e testes (conforme exigido para certificação).",
                "Fornecimento de mão de obra especializada e certificada para soldagem, operadores de fabricação e riggers.",
                "Serviços logísticos e de armazenamento, aproveitando o comprimento de 250m do nosso cais com profundidade de 10,6m."
            ],
            installationUtilities: `
            Área de fabricação estrutural de 180x32m, sendo coberta (130x32m).<br />
            Área de fabricação externa de 210x120m
            3 guindastes overhead (32/8mt) com altura de gancho de 10m<br />
            Área de utilitários (100x10m)
            Instalação PIP
            Instalação multi-junção
            Área dedicada para jateamento e pintura
            `,
            productionEquipmentIntro: `
            Equipamentos de soldagem SMAW (22 unidades) <br />
            Equipamentos de soldagem FCAW (25 unidades)<br />
            Equipamentos de soldagem GTAW (30 unidades) <br />
            Equipamentos de soldagem SAW (8 unidades) <br />
            Rolos de soldagem (16 unidades, carga de 100mt<br />
            capacidade cada, carga total de 200mT<br />
            capacidade/conjunto) <br />
            Cortadora de chapas CNC (3x12m) <br />
            Perfiladora CNC (tubular redonda)<br />
            Perfiladora CNC (vigas) <br />
            Máquina de rolar (largura de 3000mm,<br />
            espessura de 72mm em St355) rolo superior <br />
            790mm<br />
            Máquinas de Jateamento a vácuo <br />
            Suportes de fabricação para spools<br />
            fabricação
            `,
            logisticEquipmentIntro: `
            <ul className="shallow-list">
            <li className="shallow-list-item">1 guindaste crawler Liebheer (750mt)</li>
            <li className="shallow-list-item">1 guindaste crawler Liebheer (400mt)</li>
            <li className="shallow-list-item">1 Terex (63mt)</li>
            </ul>
            `,
            QcEquipmentTitle: `Equipamentos de QC`,
            QcEquipmentIntro: `
            <p>
            Ferramentas de medição calibradas (ampla<br />
            gama, comprimento, temperatura, pressão) <br />
            Equipamentos de pesagem <br />
            Controle dimensional (2x) scanners 3D <br />
            Equipamentos de inspeção de pintura <br />
            Equipamentos NDE <br />
            Equipamentos de hidroteste de alta pressão <br />
            Equipamentos
            </p>
            `,
            qualityHealthSafetyAndEnvironmentalcareIntroText: `
            O Estaleiro Atlântico do Amboim opera um sistema integrado<br />
            de gestão incorporando<br />
            Qualidade, Segurança, Saúde e cuidados ambientais, guiado<br />
            pelo Código ISO 9001:2008 para Gestão de qualidade, e pelo Código ISM da IMO para segurança e<br />
            gestão ambiental.<br />
            Estamos comprometidos em fornecer um ambiente de trabalho saudável e seguro e, para tal, aplicamos um conjunto de ferramentas de medição eficazes no estaleiro, com o objetivo de.
            `,
            ManpowerAndTrainingText: `
            Temos uma escola de formação onde os fabricantes e<br />
            soldadores são treinados e qualificados. A formação inclui<br />
            os seguintes processos de soldagem <br />
            <br />
            SMAW <br />
            FCAW <br />
            GTAW <br />
            SAW <br />
            <br />
            O nosso programa de formação estende-se a outras disciplinas específicas<br />
            como andaimes, operadores de máquinas, operadores de guindastes, treinamento em Segurança, Primeiros Socorros, Inspeção<br />
            treinamento, inglês, Excel, Matrix, Software de Desenho,<br />
            IFF, Combate a Incêndios entre outros.<br />
            Também colaboramos com universidades e institutos locais, oferecendo workshops e apresentações,<br />
            com o<br />
            objetivo de encontrar talentos locais.
            `,
            ShallowWaterFieldsTitle: `Campos em águas rasas`,
            ShallowWaterFieldsIntro: `
            <ul className="col-md-4">
            <li className="shallow-list-item">Pilares</li>
            <li className="shallow-list-item">Jackets</li>
            <li className="shallow-list-item">Pequenos módulos topside</li>
            <li className="shallow-list-item">Grelhagens</li>
            <li className="shallow-list-item">Fixação marinha</li>
            </ul>
            `,
            DeepWaterFieldsTitle: `Campos em águas profundas`,
            DeepWaterFieldsIntro: `
            <ul>
            <li className="shallow-list">Pilares de sucção</li>
            <li className="shallow-list">Tanques de flutuabilidade</li>
            <li className="shallow-list">Linhas de fluxo de campo</li>
            <li className="shallow-list">Risers</li>
            <li className="shallow-list">Estruturas subaquáticas (LRAs, URAs, FLETs, PLETs)</li>
            <li className="shallow-list">Manifolds</li>
            <li className="shallow-list">Outras estruturas subaquáticas</li>
            <li className="shallow-list">e vários tipos de linhas de fluxo aproveitando as</li>
            <li className="shallow-list">nossas instalações de pipe-in-pipe e multi-junção.</li>
            </ul>
            `
        }
    };

    const url = new URL(request.url);
    const lang = url.searchParams.get('lang') || 'pt'; // Default to 'en' if lang is not provided
    // Get the locale from the request headers

    // const lang = request.headers.get('accept-language')?.split(',')[0] || 'en'; // Fallback to 'en' if not found

    const data = texts[lang] || texts.en;

    return NextResponse.json(data); // Return localized data in JSON format
}