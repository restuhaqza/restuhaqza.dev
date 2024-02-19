package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/restuhaqza/restuhaqza.dev/server/handler/api"
)

func main() {
	r := gin.Default()

	r.GET("/", api.HelloWorld)

	err := r.Run(":3001")

	if err != nil {
		fmt.Println("server error:", err.Error())
	}
}
