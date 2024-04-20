<?php

namespace App\RabbitMQ;

use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;

class OrderProcess
{
    protected $connection;
    protected $channel;
    protected $exchange = '1234';
    protected $queue = '1234';
    protected $routingKey = '1234';

    public function __construct()
    {
        $this->connection = new AMQPStreamConnection(
            env('RABBITMQ_HOST'),
            env('RABBITMQ_PORT'),
            env('RABBITMQ_LOGIN'),
            env('RABBITMQ_PASSWORD'),
            env('RABBITMQ_VHOST')
        );

        $this->channel = $this->connection->channel();

        $this->channel->exchange_declare($this->exchange, 'direct', false, true, false);
        $this->channel->queue_declare($this->queue, false, true, false, false);
        $this->channel->queue_bind($this->queue, $this->exchange, $this->routingKey);
    }

    public function publish($message)
    {
        $msg = new AMQPMessage($message);
        $this->channel->basic_publish($msg, $this->exchange, $this->routingKey);
    }

    public function consume($callback)
    {
        $this->channel->basic_consume($this->queue, '', false, true, false, false, $callback);

        while ($this->channel->is_consuming()) {
            $this->channel->wait();
        }
        $this->channel->close();
        connection->close();
    }

    public function __destruct()
    {
        $this->channel->close();
        $this->connection->close();
    }
}