package main

import (
	"fmt"
	"net/http"

	"github.com/AKRVerz/GoChatApp/pkg/websocket"
)

func serveWS(pool *websocket.Pool, w http.ResponseWriter, r *http.Request){
	fmt.Println("Endpoint")
	conn, err := websocket.Upgrade(w,r)
	if err != nil{
		fmt.Println(w, "%+v\n", err)
	}
	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}
	pool.Register <- client
	client.Read()
}

func setupRoutes(){
	pool := websocket.NewPool()
	go pool.Start()
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request){
		serveWS(pool, w, r)
		})
}

func main(){
	fmt.Println("Starting server")
	setupRoutes()
	http.ListenAndServe(":9000", nil)
}