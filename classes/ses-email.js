require('dotenv').config();
const aws = require('aws-sdk');

const ses = {
    config: {
        apiVersion: '2010-12-01',
        accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
        region: process.env.AWS_SES_REGION
    },

    sendMail: async (to) => {
        // Convert to array
        if (!Array.isArray(to)) {
            to = to.split(',');
        }

        const params = {
            Source: process.env.MAILER_EMAIL,
            Destination: {
                ToAddresses: to
            },
            ReplyToAddresses: [
                process.env.MAILER_EMAIL
            ],
            Message: {
                Body: {
                    Html: {
                        Charset: "UTF-8",
                        Data: "HTML_FORMAT_BODY"
                    },
                    Text: {
                        Charset: "UTF-8",
                        Data: "TEXT_FORMAT_BODY"
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'Test email'
                }
            },
        };

        return new aws.SES(ses.config).sendEmail(params).promise();
    }
};

module.exports = ses;