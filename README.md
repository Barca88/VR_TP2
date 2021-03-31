# VR
Trabalho prático de virtualização de redes. 

Builds:

Auth Server -> docker build image-auth -t autenticacao:latest

HTTP Server -> docker build image-http -t servidorhttp:latest

Web App -> docker build image-webapp -t webapp:latest

Nginx -> docker build image-proxy -t proxy:latest

Instalação:

- docker-compose up -d


NOTAS :

Nginx consegue correr localmente com as rotas. A unica imagem que não dá conflitos a instalar o Nginx é a do CentOs. Problemas de DNS , Nginx não consegue comunicar com containers da mesma rede. 
