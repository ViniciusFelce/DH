*** Settings ***
# Vinicius R.Felce dos Santos
Library            SeleniumLibrary
Resource           ./QAviniciusFelce.resource
Test Setup         Abrir o site
Test Teardown      Close Browser

*** Test Cases ***
Validação das informações do curso de Data Analytics
    Clicar em “Aceitar Cookies”
    Clicar em “Ver outros cursos”
    Selecionar o curso “Data Analytics”
    Verificar se o texto de chamada do curso contém a frase “voltado para qualquer pessoa que deseja ampliar suas capacidades analíticas”
    Verificar se a descrição do curso contém a frase “pessoas interessadas em business intelligence”
    Clicar em “Inscreva-se agora
    Clicar em “Inscreva-se”
    Validar que o valor do curso é “R$10.315”

Validação das informações do curso de Data Science
    Abrir o site da Digital House
    Clicar em “Aceitar Cookies”
    Clicar em "Ver outros cursos"
    Selecionar o curso “Data Science”
    Validacao de conteudo de texto de Data Science
    Clicar em “Inscreva-se agora" e "Increva-se"
    Validacao de valor do curso de Data Science

Validação das informações do curso de Marketing Digital
    Abrir o site da Digital House
    Clicar em “Aceitar Cookies”
    Clicar em "Ver outros cursos"
    Selecionar o curso “Marketing Digital”
    Validacao de conteudo de texto de Marketing Digital
    Clicar em “Inscreva-se agora" e "Increva-se"
    Validacao de valor do curso de Marketing Digital

Validação das informações do curso Certified Tech Developer
    Abrir o site da Digital House
    Clicar em “Aceitar Cookies”
    Clicar em "Ver outros cursos"
    Selecionar o curso “Certified Tech Developer"
    Validacao de conteudo de texto do Certified Tech Developer
    Clicar em “Inscreva-se agora" e "Increva-se"
    Validacao de valor do curso Certified Tech Developer
    Preenchimento dos campos input

Validação das informações do Programa de Bolsas BLK PWR DEV
    Abrir o site da Digital House
    Clicar em “Aceitar Cookies”
    Clicar em "Quero minha bolsa"
    Validacao de conteudo de texto de Bolsas BLK PWR DEV
    Validacao de valor do Programa de Bolsas BLK PWR DEV
    Clicar em “Quero minha bolsa de estudo”
    Preenchimento dos campos input bolsa