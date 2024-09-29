/**
 * Response body of GET /new_requests
 */
export interface NewRequestsResponse {
  /**
   * 각 예약 요청의 id, 객실 수, 체크인 날짜, 체크아웃 날짜를 담은 배열
   */
  reservations_info: {
    /**
     * 예약 요청 id
     */
    id: number;
    /**
     * 객실 수
     */
    amount: number;
    /**
     * 체크인 날짜
     */
    check_in_date: number;
    /**
     * 체크아웃 날짜
     */
    check_out_date: number;
  }[];
}
