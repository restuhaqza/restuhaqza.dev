package helper

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Meta struct {
	HttpCode int    `json:"httpCode"`
	Message  string `json:"message"`
	Status   string `json:"status"`
}

type Response struct {
	Meta   Meta        `json:"meta"`
	Result interface{} `json:"result"`
}

type response struct {
	c *gin.Context
}

func FormatResponse(httpCode int, status string, message string, data interface{}) Response {
	return Response{
		Meta: Meta{
			HttpCode: httpCode,
			Message:  message,
			Status:   status,
		},
		Result: data,
	}
}

func SendResponse(c *gin.Context) *response {
	return &response{c}
}

func (r *response) Success(message string, data interface{}) {
	formatResponse := FormatResponse(http.StatusOK, "success", message, data)
	r.c.JSON(http.StatusOK, formatResponse)
}
