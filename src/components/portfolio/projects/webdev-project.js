import React from 'react';
import { Helmet } from 'react-helmet';
import metadata from './webdev-project-metadata';
import "../../../assets/styles/PortfolioPage.css";

// import img_mobile_cover from "../../../assets/images/portfolio/webdev-project_mobile-cover.png";
import img_web_cover from "../../../assets/images/portfolio/webdev-project_web-cover.png";
import img_case_logo from "../../../assets/images/portfolio/webdev-project_logo-black.png";

import Header from '../../common/Header';

const staticKeywords = ["Consultoria", "Ciência de Dados", "Direito", "Advogado", "Advogada", "Branding", "Identidade Visual", "Desenvolvimento Web", "E-mail Corporativo", "Landing Page", "SEO", "Tráfego Pago"];
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
            {/* CASE SUMMARY */}
            <div className="portfolio-page-section-summary">
                <div className="portfolio-page-section-right">
                    <div className="figure">
                        <img src={img_web_cover} alt="Screenshot do site da Isadora Urel" />
                    </div>
                </div>
                <div className="portfolio-page-section-left">
                    <h1>{metadata.title}</h1>
                    <div className="portfolio-tags">{metadata.tags.map(tag => <p>{tag}</p>)}</div>
                    <p>
                        Este é o resultado de um <i>job</i> de desenvolvimento de site comercial para uma advogada.
                    </p>
                    <p>
                        Nesse projeto fica apresentada toda a amplitude dos serviços oferecidos pela DSZero em desenvolvimento web: a solução integrada transitou por todas as necessidades da cliente: desde conceitos de <b><i>branding</i></b>, escolha de <b>tipografia</b> e design da <b>logomarca</b>, até a configuração de <b><i>e-mail</i> corporativo</b> e a implementação da <b>página web</b> em estrutura de <i>landing page</i>, cuja simplicidade visual dialoga com uma sólida estrutura de <b><i>tracking</i></b> e elementos essenciais para a <b>otimização de rankeamento</b> em mecanismos de busca, tornando o site pronto para campanhas de <b>tráfego pago</b>.
                    </p>
                    <p>
                        A solução final pode ser conferida em <b><a href="https://isadoraurel.adv.br/" target="_blank" rel="noopener noreferrer" >isadoraurel.adv.br</a></b>.
                    </p>
                </div>
            </div>
            {/* CASE DETAILS SECTION */}
            <div className="portfolio-page-section">
                <h2>Entendimento do Negócio</h2>
                <div className="portfolio-page-section-one-column">
                    <p>
                        A cliente nos procurou em momento de transição de carreira, precisando centralizar informações profissionais e de serviços prestados em um site próprio. A transição veio acompanhada da necessidade de atualizar a identidade visual. Dado ela estava associada a um escritório que detinha o gerenciamento de contas de e-mail, identificamos a importância de configurar uma nova conta de e-mail comercial. Este passo foi crucial para redirecionar a comunicação com os clientes nessa nova etapa.
                    </p>
                </div>
            </div>
            {/* CASE DETAILS SECTION */}
            <div className="portfolio-page-section">
                <h2>Design da Marca</h2>
                <div className="portfolio-page-section-one-column">
                    <p>
                        A cliente já possuía os elementos mais importantes de identidade visual, que já estava em uso em conteúdos digitais, mas sentia a necessidade de reformulá-la. Focamos em três elementos principais: logo, tipografia e paleta de cores.
                    </p>
                    <br/>
                    {/* CASE DETAILS SUBSECTION */}
                    <h3>Logomarca</h3>
                    <div className="portfolio-page-subsection-two-columns" data-aos="fade-right">
                        <div className="portfolio-page-subsection-two-columns-column">
                            <div className="figure">
                                <img src={img_case_logo} alt="Web Development Project Cover" />
                            </div>
                        </div>
                        <div className="portfolio-page-subsection-two-columns-column">
                            <p>
                                A logomarca foi redesenhada para ser mais moderna e limpa. A tipografia foi escolhida para ser mais legível e a paleta de cores foi simplificada para ser mais versátil.
                            </p>
                        </div>
                    </div>
                    <br/>
                    {/* CASE DETAILS SUBSECTION */}
                    <h3>Tipografia</h3>
                    <div className="portfolio-page-subsection-two-columns" data-aos="fade-left">
                        <div className="portfolio-page-subsection-two-columns-column">
                            <div className="font-sample">
                                <div className="text-h1">
                                    Wordmark
                                </div>
                                <div className="text-h2">
                                    Títulos
                                </div>
                                <div className="text-p">
                                    Texto
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-page-subsection-two-columns-column">
                            <p>
                                A tipografia foi escolhida para ser mais legível e moderna. A escolha foi por uma família tipográfica que oferecesse uma gama de pesos e estilos para ser mais versátil.
                            </p>
                        </div>
                    </div>
                    {/* CASE DETAILS SUBSECTION
                    <div className="portfolio-page-subsection-two-columns" data-aos="fade-up">
                        <h3>Paleta de Cores</h3>
                        <div className="portfolio-page-subsection-two-columns-column">
                            <br/>
                        </div>
                        <div className="portfolio-page-subsection-two-columns-column">
                            <p>
                                A logomarca foi redesenhada para ser mais moderna e limpa. A tipografia foi escolhida para ser mais legível e a paleta de cores foi simplificada para ser mais versátil.
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
            
            {/* <div className="portfolio-page-section">
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
            </div> */}
        </div>
    </div>
);

export default WebDevProject;