FROM ubuntu:18.04


#JAVA
RUN apt-get update && apt-get install -y \ 
    vim \
    git \ 
    wget \
    openjdk-8-jdk \
    curl

	
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
ENV PATH $JAVA_HOME/bin:$PATH
ENV REACT_APP_SERVER_URL https://eloebiznes-backend.azurewebsites.net

#WGET, GNUPG2
RUN apt update && apt install -y wget &&\
	apt install -y curl &&\
	apt install -y gnupg2

#NODEJS WITH NPM
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get update &&\
	apt-get install -y nodejs
RUN npm install -g npm@latest

EXPOSE 3000

RUN useradd -ms /bin/bash kskiba
RUN adduser kskiba sudo

USER root
WORKDIR /opt/
RUN mkdir /opt/ebiznes-frontend
WORKDIR /opt/ebiznes-frontend
COPY . ./
RUN npm install
