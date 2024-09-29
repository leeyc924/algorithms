/**
 * Request body of PUT /simulate
 */
export interface SimulateRequest {
  /**
   * 예약 요청의 id, 배정할 객실 번호의 배열
   */
  room_assign: {
    /**
     * 예약 요청의 id
     */
    id: number;
    /**
     * 배정할 객실 번호
     */
    room_number: number;
  }[];
}

/**
 * Response body of PUT /simulate
 */
export interface SimulateResponse {
  /**
   * 1일 증가한 현재 날짜
   */
  day: number;
  /**
   * 예약을 승낙했으나 객실 배정에 실패한 횟수
   */
  fail_count: number;
}
