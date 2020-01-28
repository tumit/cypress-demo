FROM cypress/included:3.8.0

RUN npm install

ENTRYPOINT ["", "-u", "root"]