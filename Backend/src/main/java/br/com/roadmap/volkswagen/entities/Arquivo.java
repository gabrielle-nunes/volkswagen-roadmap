//package br.com.roadmap.volkswagen.entities;
//
//import br.com.roadmap.volkswagen.dto.ArquivoDTO;
//
//import javax.persistence.*;
//import java.util.UUID;
//
//@Entity
//@Table(name = "tbl_arquivo")
//public class Arquivo {
//    @Id
//    @GeneratedValue(strategy = GenerationType.SEQUENCE)
//    private UUID uuidImagem;
//    @Lob
//    private byte[] imagem;
//
////    @OneToOne(fetch = FetchType.LAZY)
////    @JoinColumn(name = "tbl_inovacao")
////    private Inovacao inovacao;
//
//    public UUID getUuidImagem() {
//        return uuidImagem;
//    }
//
//    public void setUuidImagem(UUID uuidImagem) {
//        this.uuidImagem = uuidImagem;
//    }
//
//    public byte[] getImagem() {
//        return imagem;
//    }
//
//    public void setImagem(byte[] imagem) {
//        this.imagem = imagem;
//    }
//
////    public Inovacao getInovacao() {
////        return inovacao;
////    }
////
////    public void setInovacao(Inovacao inovacao) {
////        this.inovacao = inovacao;
////    }
//
//    public static Arquivo convert(ArquivoDTO arquivoDTO) throws Exception{
//        Arquivo arquivo = new Arquivo();
//
//        arquivo.setImagem(arquivoDTO.getImagem());
////        arquivo.setInovacao(arquivoDTO.getInovacao());
////        arquivo.setUuidImagem(arquivoDTO.getUuidImagem());
//        return arquivo;
//    }
//}
