import React from 'react';
import { Helmet } from 'react-helmet';
import metadata from './webdev-project-metadata';
import "../../../assets/styles/PortfolioPage.css";

// import img_mobile_cover from "../../../assets/images/portfolio/webdev-project_mobile-cover.png";
import img_web_cover from "../../../assets/images/portfolio/webdev-project_web-cover.png";

import Header from '../../common/Header';

const staticKeywords = ["Consultoria", "Ciência de Dados"];
const keywords = [...staticKeywords, ...metadata.tags].join(", ");

const WebDevProject = () => (
    <div className="portfolio-page">
        <Helmet>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
        <Header />
        <div className="portfolio-page-container">
            <div className="portfolio-page-section">
                <div className="portfolio-page-section-right">
                    <div className="figure">
                        <img src={img_web_cover} alt="Web Development Project Cover" />
                    </div>
                </div>
                <div className="portfolio-page-section-left">
                    <h1>{metadata.title}</h1>
                    <div className="portfolio-tags">{metadata.tags.map(tag => <p>{tag}</p>)}</div>
                    <p>Este é o resultado de um <i>job</i> real de desenvolvimento de um site comercial para uma advogada. Aqui fica evidente a abordagem holística adotada, destacando a amplitude dos serviços oferecidos pela DSZero em desenvolvimento web: a solução integrada abrangeu desde conceitos de <i>branding</i>, escolha de tipografia e design da logomarca, até a implementação de <i>e-mail</i> corporativo e a implementação da página web em estrutura de <i>landing page</i>, cuja simplicidade visual dialoga com uma sólida estrutura de <i>tracking</i> e elementos essenciais para a otimização de rankeamento em mecanismos de busca, tornando o site pronto para campanhas de tráfego pago.</p>
                </div>
            </div>
            <div className="portfolio-page-section">
                <div className="portfolio-page-section-one-column">
                    <h2>Entendimento do Negócio</h2>
                    <br/>
                    <p>No início deste projeto, a cliente já tinha uma identidade visual definida, fruto de um trabalho conjunto com uma agência de marketing digital. Esta identidade era utilizada em publicações nas redes sociais, bem como em documentos e anúncios.</p>
                    <br/>
                    <p>Com a transição de carreira, surgiu a necessidade de atualizar a identidade visual. Dado que a cliente estava associada a um escritório com gerenciamento de contas de e-mail, identificamos a importância de estabelecer uma nova conta de e-mail comercial. Este passo foi crucial para centralizar a comunicação com os clientes nessa nova etapa.</p>
                </div>
            </div>
            <div className="portfolio-page-section">
                <div className="portfolio-page-section-one-column">
                    <h2>Design da Marca</h2>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus nec nunc tincidunt aliquam.</p>
                </div>
            </div>
            <div className="portfolio-page-section">
                <div className="portfolio-page-section-one-column">
                    <h2>Página Web</h2>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus nec nunc tincidunt aliquam.</p>
                </div>
            </div>
            <div className="portfolio-page-section">
                <div className="portfolio-page-section-one-column">
                    <h3>Cabeçalho & Hero</h3>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus nec nunc tincidunt aliquam.</p>
                </div>
            </div>
            <div className="portfolio-page-section">
                <div className="portfolio-page-section-one-column">
                    <h3>Conteúdo</h3>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus nec nunc tincidunt aliquam.</p>
                </div>
            </div>
            <div className="portfolio-page-section">
                <div className="portfolio-page-section-one-column">
                    <h3>Rodapé</h3>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus nec nunc tincidunt aliquam.</p>
                </div>
            </div>
        </div>
    </div>
);

export default WebDevProject;