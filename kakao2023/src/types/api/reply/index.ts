/**
 * Request body of PUT /reply
 */
export interface ReplyRequest {
  /**
   * 답변하고자 하는 예약 요청의 id외 승낙 / 거절 여부의 배열
   */
  replies: {
    /**
     * 예약 요청의 id
     */
    id: number;
    /**
     * 	승낙의 경우 "accepted", 거절의 경우 "refused"
     */
    reply: string;
  }[];
}

/**
 * Response body of PUT /reply
 */
export interface ReplyResponse {
  /**
   * 현재 날짜
   */
  day: number;
}
