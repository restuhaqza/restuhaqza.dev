package api

import (
	"github.com/gin-gonic/gin"
	"github.com/restuhaqza/restuhaqza.dev/server/helper"
)

func HelloWorld(c *gin.Context) {
	helper.SendResponse(c).Success("Hello World! with ❤️ for you", nil)
}
