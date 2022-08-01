*** Variables ***
${SITE}                                          https://www.digitalhouse.com/br
${NAVEGADOR}                                     Chrome
${BT_QUERO_BOL_ESTU}                             xpath=//*[@id="S6I9mVUafA1bbD5Bqc0xkFaqOMcdCRbf"]
${BT_MINH_BOL}                                   xpath=//*[@id="__next"]/div/main/div[1]/div/div/div[2]/div/a
${BT_VER_CURS}                                   xpath=//*[@id="__next"]/div/main/section/div/div[3]/div/a
${BT_INSCRE_AGR}                                 xpath=//*[@id="__next"]/div/main/section/div/div/div[1]/div/div[2]/div[1]/a
${BT_INSCRE}                                     xpath=//*[@id="0"]/div/a
${CUR_DT_ANALYT}                                 xpath=//*[@id="__next"]/div/main/section[2]/div/div/div[3]/a/span
${BT_CURS_MARKT}                                 xpath=//*[@id="__next"]/div/main/section[2]/div/div/div[8]/a
${CURS_DT_SCIEN}                                 xpath=//*[@id="__next"]/div/main/section[2]/div/div/div[4]/a/span
${BT_CURS_CTD}                                   xpath=//*[@id="__next"]/div/main/section[2]/div/div/div[1]/a/span
${VLR_CURS_DT_ANALYT}                            R$10.315
${VLR_CURS_MARKT}                                R$9.376
${VLR_CURS_DT_SCIEN}                             R$11.878
${VLR_BOL}                                       R$88,00 mensais
${VLR_CURS_CTD}                                  R$ 289,00 mensais
${CMP_NM_BOL}                                    xpath=//*[@id="CzpXMe7EhpI6diDHrN8Oa1GHrhEPfIsA"]
${CMP_SBR_NM_BOL}                                xpath=//*[@id="f02RR9bt0eNTrF0fJuC2azUMkD7TRX7M"]
${CMP_EMAIL_BOL}                                 xpath=//*[@id="MUDBMzoKRZnrEBNp5XfGwgA0rdT7iCUw"]
${CMP_DDD_CEL}                                   xpath=//*[@id="IIqCGDME1hJVbZz5duh3TgaPEzSbSd6G"]
${CMP_NM}                                        xpath=//*[@id="name"]
${CMP_SBR_NM}                                    xpath=//*[@id="lastname"]
${CMP_EMAIL}                                     xpath=//*[@id="email"]
${CMP_DDD}                                       xpath=//*[@id="phonecode"]
${CMP_CEL}                                       xpath=//*[@id="phone"]
${INPUT_NM}                                      Vinicius  
${INPUT_SBR_NM}                                  R.Felce 
${INPUT_EMAIL}                                   viramos017@gmail.com
${INPUT_DDD}                                     11
${INPUT_CEL}                                     9764267898
${INPUT_DDD_CEL}                                 119764267898

           





*** Keywords ***
# Métodos de acesso gerais

    Abrir o site da Digital House
            Open Browser                              ${SITE}        ${NAVEGADOR}
            Maximize Browser Window

    Clicar em “Aceitar Cookies”
            Sleep                                     6
            Select frame                              xpath=/html/body/iframe[4]
            Click Element                             xpath=/html/body/div/div/div[1]/div[1]/div[2]/div[1]/div[2]
            Unselect frame

    Clicar em "Ver outros cursos"
            Sleep                                     1
            Click Element                             ${BT_VER_CURS}

    Verificar se o texto de chamada do curso contém a frase “voltado para qualquer pessoa que deseja ampliar suas capacidades analíticas”
            Page Should Contain                       voltado para qualquer pessoa que deseja ampliar suas capacidades analíticas

    Verificar se a descrição do curso contém a frase “pessoas interessadas em business intelligence”
             Page Should Contain                      pessoas interessadas em business intelligence

    Clicar em "Inscreva-se agora"
            Click Element                             ${BT_INSCRE_AGR}

    Clicar em "Increva-se"
            Click Element                             ${BT_INSCRE}



#Métodos de verificação de Data Analytics

    Selecionar o curso “Data Analytics”
            Sleep                                     1
            Click Element                             ${CUR_DT_ANALYT}

    Validacao de conteudo de texto de Data Analytics    
            Page Should Contain                       voltado para qualquer pessoa que deseja ampliar suas capacidades analíticas
            Page Should Contain                       pessoas interessadas em business intelligence

    Validacao de valor do curso de Data Analytics
            Page Should Contain                      ${VLR_CURS_DT_ANALYT}



#Métodos de verificação de Data Science

    Selecionar o curso “Data Science”
            Sleep                                     1
            Click Element                             ${CURS_DT_SCIEN}

    Validacao de conteudo de texto de Data Science     
            Page Should Contain                       profissionais de diversas áreas que desejam melhorar sua comunicação como engenheiros de Big Data
            Page Should Contain                       adquirir habilidades práticas com as ferramentas específicas para fazer análises

    Validacao de valor do curso de Data Science
            Page Should Contain                      ${VLR_CURS_DT_SCIEN}



#Métodos de verificação de Marketing Digital

    Selecionar o curso “Marketing Digital”
            Sleep                                    1
            Click Element                            ${BT_CURS_MARKT}

    Validacao de conteudo de texto de Marketing Digital   
            Page Should Contain                      voltado para as pessoas que querem ingressar na carreira de marketing digital
            Page Should Contain                      Empreendedores que desejam compreender os fundamentos da área e as principais estratégias de marketing digital

    Validacao de valor do curso de Marketing Digital
            Page Should Contain                      ${VLR_CURS_MARKT}



#Métodos de verificação de Desenvolvimento Certified Tech Developer

    Selecionar o curso “Certified Tech Developer"
            Sleep                                   1
            Click Element                           ${BT_CURS_CTD}

    Validacao de conteudo de texto do Certified Tech Developer
            Page Should Contain                     Uma carreira pensada e desenhada pela Digital House, Mercado Livre e Globant
            Page Should Contain                     Se você deseja mergulhar no mundo da programação e no desenvolvimento de novos produtos digitais 

    Validacao de valor do curso Certified Tech Developer  
            Page Should Contain                     ${VLR_CURS_CTD}
            
    Preenchimento dos campos input
            Input Text                              ${CMP_NM}            ${INPUT_NM}
            Input Text                              ${CMP_SBR_NM}        ${INPUT_SBR_NM}
            Input Text                              ${CMP_EMAIL}         ${INPUT_EMAIL} 
            Input Text                              ${CMP_DDD}           ${INPUT_DDD} 
            Input Text                              ${CMP_CEL}           ${INPUT_CEL}   



#Métodos de verificação de Programa de Bolsas BLK PWR DEV

    Clicar em "Quero minha bolsa"
            Click Element                           ${BT_MINH_BOL}

    Validacao de conteudo de texto de Bolsas BLK PWR DEV
            Page Should Contain                     Uma carreira em Programação para mudar o seu futuro
            Page Should Contain                     Confira os requisitos para a bolsa de estudo 

    Validacao de valor do Programa de Bolsas BLK PWR DEV
            Page Should Contain                     ${VLR_BOL}

    Clicar em “Quero minha bolsa de estudo”
            Click Element                           ${BT_QUERO_BOL_ESTU}
            
    Preenchimento dos campos input bolsa
            Input Text                              ${CMP_NM_BOL}              ${INPUT_NOME}
            Input Text                              ${CMP_SBR_NM_BOL}          ${INPUT_SOBRENOME}
            Input Text                              ${CMP_EMAIL_BOL}           ${INPUT_EMAIL} 
            Input Text                              ${CMP_DDD_CEL}             ${INPUT_DDD_CEL} 
            Select from list by label               state                      São Paulo
            Sleep                                   1
            Select from list by label               ethnic_descent             Aruja
            Sleep                                   1
            Select checkbox                         checkbox_terms
            Sleep                                   3
            Unselect checkbox                       checkbox_terms  
