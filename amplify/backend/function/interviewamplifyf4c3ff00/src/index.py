import json
import openai
import boto3
from botocore.exceptions import ClientError

# secrets manager config
secret_name = "OPENAI_API_KEY"
region_name = "eu-west-1"

# Create a Secrets Manager client
session = boto3.session.Session()
client = session.client(
    service_name='secretsmanager',
    region_name=region_name
)

def handler(event, context):
    # get secret
    try:
        get_secret_value_response = client.get_secret_value(
            SecretId=secret_name
        )
    except ClientError as e:
        # For a list of exceptions thrown, see
        # https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
        raise e

    # Decrypts secret using the associated KMS key.
    openai.api_key = json.loads(get_secret_value_response['SecretString'])['OPENAI_API_KEY']
    
    aiResponse = openai.ChatCompletion.create(
        model=event["model"],
        messages=event["messages"]
    )
  
    return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(aiResponse["choices"][0]["message"]["content"])
    }